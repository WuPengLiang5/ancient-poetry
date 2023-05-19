import lunyu from "chinese-poetry/chinese-poetry/lunyu/lunyu.json"

export function getChapter(){
    let chapters = []
    lunyu.forEach(item => {
        chapters.push(item.chapter)
    })
    return chapters
}

export function getPoetry(chapter){
    return lunyu.filter(item => item.chapter === chapter)[0]
}