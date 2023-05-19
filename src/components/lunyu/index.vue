<template>
  <div class="poetry lunyu-list">
      <ul>
          <li v-for="(chapter,index) in chapters" :key="index">
              <router-link :to="{
                  name:'LunYuDetail',
                  params:{
                      chapter:chapter
                  }
              }">{{chapter}}</router-link>
          </li>
      </ul>
      <div class='home-back content'>
          <p>
              <router-link to="/" class="under">主页</router-link>
          </p>
      </div>
  </div>
</template>

<script>
import {getChapter} from '@/api/lunyu/getData'

export default {
    name:'LunYu',
    data(){
        return {
            chapters:[]
        }
    },
    created(){
        this.getChapter()
    },
    methods:{
        getChapter(){
            this.chapters = getChapter()
        }
    }
}
</script>

<style scoped>
.lunyu-list{
    width: 500px;
    height: 300px;
    padding: 10px;
    top:0;
}
.lunyu-list>ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.lunyu-list>ul>li{
    width: 80px;
    padding: 10px;
    font-size: 1.2rem;
}
.home-back{
    text-align: right;
}
.home-back p{
    padding:10px;
}
</style>