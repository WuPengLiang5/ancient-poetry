import intro from "chinese-poetry/chinese-poetry/wudai/nantang/intro.json"
import authors from "chinese-poetry/chinese-poetry/wudai/nantang/authors.json"
import poetrys from "chinese-poetry/chinese-poetry/wudai/nantang/poetrys.json"

export function getIntro(){
    return intro
}

export function getAuthors(){
    return authors
}

export function getPoetrysByAuthor(author){
    return poetrys.filter(item => item.author == author)
}

export function getPoetryByTitle(author,title){
    const poetryList = getPoetrysByAuthor(author)
    let poetry
    poetryList.forEach(item => {
        if(item.title == title){
            poetry = item
        }
    })
    return poetry
}