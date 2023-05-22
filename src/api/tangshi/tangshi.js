import axios from 'axios';
import tangPoetrys from 'chinese-poetry/chinese-poetry/json/唐诗三百首.json';
import allTangAuthor from 'chinese-poetry/chinese-poetry/json/authors.tang.json';
import allSongAuthor from 'chinese-poetry/chinese-poetry/json/authors.song.json';

export function getAllTangAuthor(){
    return allTangAuthor
}
export function getAllSongAuthor(){
    return allSongAuthor
}
export async function searchAllPoetry(obj){
    let author = obj.author
    let title = obj.title
    let type = obj.type

    if(!author && !title){
        return []
    }
    
    let allTangPoetrys =[]
    let poetrys = []

    if(type == 'tang'){
        allTangPoetrys = await getAllTangPoetry()
    }
    if(type == 'song'){
        allTangPoetrys = await getAllSongPoetry()
    }
    
    // console.log(obj)
    if(author){
        const temp = allTangPoetrys.filter(item => item.author == author)
        poetrys = title?temp.filter(item => item.title == title):temp
        // console.log(temp,poetrys)
    }else{
        poetrys = allTangPoetrys.filter(item => item.title == title)
    }
    return poetrys
}
export async function getAllTangPoetry(){
    let allTangPoetry = []
    let urls = []
    for(let i = 0;i < 58;i = i + 1){
        let url = '/static/chinese-poetry/chinese-poetry/json/poet.tang.' + i * 1000 +'.json'
        urls.push(url)
    }
    // console.log(urls)
    console.time('testTime'); 
    for(let i = 0;i < urls.length;i++){
        await axios.get(urls[i]).then(res => {
            allTangPoetry = allTangPoetry.concat(res.data)
            // console.log(res.data)
            // console.log(allTangPoetry)
        })
        
    }
    console.timeEnd('testTime');
    // console.log(allTangPoetry)
    return allTangPoetry
}

export async function getAllSongPoetry(){
    let allSongPoetry = []
    let urls = []
    for(let i = 0;i < 58;i = i + 1){
        let url = '/static/chinese-poetry/chinese-poetry/json/poet.song.' + i * 1000 +'.json'
        urls.push(url)
    }
    for(let i = 0;i < urls.length;i++){
        await axios.get(urls[i]).then(res => {
            allSongPoetry = allSongPoetry.concat(res.data)
           
        })
    }
    return allSongPoetry
}

export function getTags(){
    let tags = []
    let author = []
    tangPoetrys.forEach(item => {
        tags = tags.concat(item.tags)
        author.push(item.author)
    })
    return {
        'author':[...new Set(author)],
        'tags':[...new Set(tags)]
    }
}

export function searchPoetryList(obj){
    let author = obj.author
    let tags = obj.tags
    // console.log(author,tags)
    let poetrys = []
    if(author !== 'all'){
        const poetryList = tangPoetrys.filter(item => item.author == author)
        poetryList.forEach(item => {
            const list = tags == 'all'?item.tags:item.tags.filter(item => item == tags)
            if(list.length != 0){
                poetrys.push(item)
            }
        })
    }else{
        tangPoetrys.forEach(item => {
            // console.log(author,tags,item.tags)
            const list = tags == 'all'?item.tags:item.tags.filter(item => item == tags)
            if(list.length != 0){
                poetrys.push(item)
            }
        })
    }
    return poetrys
}

export function getPoetryById(id){
    return tangPoetrys.filter(item => item.id === id)[0]
}

export async function getTangPoetryById(id){
    const allTangPoetry = await getAllTangPoetry()
    const list = allTangPoetry.filter(item => item.id === id)[0]
    return list 
}

export async function getSongPoetryById(id){
    const allSongPoetry = await getAllSongPoetry()
    return allSongPoetry.filter(item => item.id === id)[0]
}