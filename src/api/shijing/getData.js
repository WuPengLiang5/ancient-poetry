//诗经
import shijing from 'chinese-poetry/chinese-poetry/shijing/shijing.json';

// console.log(shijing)

// 获取诗经的章节
function arrGroup(arr, fn) {
    const obj = {};
    arr.forEach(item => {
        const key = JSON.stringify(fn(item));
        obj[key] = obj[key] || [];
        obj[key].push(item)
    });
    return Object.keys(obj).map(k => {
        return obj[k];
    })
}

const shijing_chapters = arrGroup(shijing,(item)=>item.chapter)
// console.log(shijing_chapters)
let shijing_chapter_sections = []
let chapters = []
let chapters_sections = []
shijing_chapters.forEach(item => {
    chapters.push(item[0].chapter)
    // chapters.push(item.chapter)
    //获取同章节的诗词
    const sections = arrGroup(item,(item)=>item.section)
    sections.forEach(section => {
        // console.log(section[0])
        chapters_sections.push(
            {
                "chapter":section[0].chapter,
                "section":section[0].section
            })
        shijing_chapter_sections.push(section)
    })
})

// console.log(shijing_chapter_sections,chapters_sections)

//通过题目获取诗经的诗词
export function getPoetry(title){
    let selectedName = {};
    let poetry = shijing.filter(item => item.title === title)
    return poetry[0]
}

export default{
    shijing,
    shijing_chapter_sections
}