import huajianji0preface from "chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-0-preface.json"
import huajianji1juan from "chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-1-juan.json"
import huajianji2juan from "chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-2-juan.json"
import huajianji3juan from "chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-3-juan.json"
import huajianji4juan from "chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-4-juan.json"
import huajianji5juan from "chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-5-juan.json"
import huajianji6juan from "chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-6-juan.json"
import huajianji7juan from "chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-7-juan.json"
import huajianji8juan from "chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-8-juan.json"
import huajianji9juan from "chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-9-juan.json"
import huajianjixjuan from "chinese-poetry/chinese-poetry/wudai/huajianji/huajianji-x-juan.json"

const  sequences = [
    {name:'huajianji-0-preface',nameZn:'花间集序言'},
    {name:'huajianji-1-juan',nameZn:'花间集卷一'},
    {name:'huajianji-2-juan',nameZn:'花间集卷二'},
    {name:'huajianji-3-juan',nameZn:'花间集卷三'},
    {name:'huajianji-4-juan',nameZn:'花间集卷四'},
    {name:'huajianji-5-juan',nameZn:'花间集卷五'},
    {name:'huajianji-6-juan',nameZn:'花间集卷六'},
    {name:'huajianji-7-juan',nameZn:'花间集卷七'},
    {name:'huajianji-8-juan',nameZn:'花间集卷八'},
    {name:'huajianji-9-juan',nameZn:'花间集卷九'},
    {name:'huajianji-x-juan',nameZn:'花间集卷十'},
]

const huajianji = [
    huajianji0preface,
    huajianji1juan,
    huajianji2juan,
    huajianji3juan,
    huajianji4juan,
    huajianji5juan,
    huajianji6juan,
    huajianji7juan,
    huajianji8juan,
    huajianji9juan,
    huajianjixjuan
]

export function getTitle(index){
   let titles = []
   huajianji[index].forEach(item => {
       titles.push({
           'author':item.author,
           'title':item.title,
           'index':index
       })
   })

   return titles
}

export function getPoetry(index,title){
    return huajianji[index].filter(item => item.title == title)[0]
}

export default {
    sequences
}