//大学 孟子 中庸
import daxue from 'chinese-poetry/chinese-poetry/sishuwujing/daxue.json';
import mengzi from 'chinese-poetry/chinese-poetry/sishuwujing/mengzi.json';
import zhongyong from 'chinese-poetry/chinese-poetry/sishuwujing/zhongyong.json';

// 获取章节
export function getChapter(type){
    if(type === 'daxue' || type === 'zhongyong'){
        return type === 'daxue'? daxue.chapter:zhongyong.chapter
    }

    let chapters = []
    mengzi.forEach(item => {
        chapters.push(item.chapter)
    })
    return chapters
}
//通过章节获取诗词
export function getPoetry(chapter,type){
    let selectedName = {};
    console.log(chapter,type,type === 'daxue')
    if(type === 'daxue' || type === 'zhongyong'){
        return type === 'daxue'?daxue:zhongyong
    }
    return mengzi.filter(item => item.chapter === chapter)[0]
}

export default{
    daxue,
    mengzi,
    zhongyong,
}