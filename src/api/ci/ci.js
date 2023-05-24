import authors from 'chinese-poetry/chinese-poetry/ci/author.song.json';
import song_3 from 'chinese-poetry/chinese-poetry/ci/宋词三百首.json';

export function getAllAuthor(){
    return authors
}

export function getAllCi(){
    // console.log('all-song')
    let poetrys = []
    for(let i = 0;i < 22;i++){
        let temp = require('chinese-poetry/chinese-poetry/ci/ci.song.'+ i * 1000 + '.json')
        poetrys = poetrys.concat(temp)
    }
    for(let i = 0;i < poetrys.length;i++) {
        poetrys[i].id = i 
    }
    // console.log(poetrys)
    return poetrys
}

// 获取宋词列表
export function getPoetryList(obj){
    let type = obj.type
    let author = obj.author
    let rhythmic = obj.rhythmic
    let poetrys = []

    if(!author && !rhythmic){
        return []
    }

    if(type == 'all-song'){
        poetrys = getAllCi()
    }else{
        poetrys = song_3
    }

    // console.log(obj)
    let poetryList = []
    if(author){
        let temp = author == 'all' ? poetrys : poetrys.filter(item => item.author == author)
        poetryList = rhythmic?temp.filter(item => item.rhythmic == rhythmic):temp
        // console.log(temp,poetrys,poetryList)
    }else{
        poetryList = rhythmic?poetrys.filter(item => item.rhythmic == rhythmic):poetrys
        // console.log(poetryList)
    }
    return poetryList
}

// 获取宋词详情
export function getPoetry(obj){
    let type = obj.type
    let id = obj.id
    let author = obj.author
    let rhythmic = obj.rhythmic
    let poetrys = []
    let poetry = undefined

    if(type == 'all-song'){
        poetrys = getAllCi()
        for(let item of poetrys){
            if(item.author == author 
                && item.rhythmic == rhythmic
                && item.id == id){
                poetry = item
                break
            }
        }
    }else{
        poetrys = song_3
        for(let item of poetrys){
            if(item.author == author && item.rhythmic == rhythmic){
                poetry = item
                break
            }
        }
    }

    // console.log(obj,poetrys)
    
    
    return poetry
}

//获取作者的详情
export function getAuthorDetail(name){
    return authors.filter(item => item.name == name)[0]
}