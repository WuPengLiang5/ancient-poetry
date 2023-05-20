<template>
  <div class="poetry lunyu-list">
      <div class="title">论语</div>
       <div class='home-back content'>
          <p>
              <router-link to="/" class="under">主页</router-link>
          </p>
      </div>
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
    width: 50%;
    height: 50%;
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
    text-align: center;
}
.home-back p{
    padding:5px 10px;
}
</style>