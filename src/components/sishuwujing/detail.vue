<template>
  <div class="poetry sishuwujing-detail">
      <div class="title">{{poetry.chapter}}</div>
       <div class="sishuwujing-chapter">
          <p>
              <router-link to='/sishuwujing'>四书五经.{{sishuwujing[type]}}</router-link>
          </p>
      </div>
      <div class="content" style="text-align:left">
          <p v-for="(paragraphs,index) in poetry.paragraphs" :key="index">
            {{paragraphs}}
            <br/>
          </p>
      </div>
  </div>
</template>

<script>
import {getPoetry} from '@/api/sishuwujing/getData'

export default {
    name: 'SiShuWuJingDetail',
    data () {
        return {
            poetry:undefined,
            sishuwujing:{'daxue':'大学','mengzi':'孟子','zhongyong':'中庸'}
        }
    },
    computed:{
        chapter:function(){
            return this.$route.params.chapter
        },
        type:function(){
            return this.$route.params.type
        }
    },
    created(){
        this.getPoetry(this.chapter,this.type)
    },
    methods:{
        getPoetry(chapter,type){
            this.poetry = getPoetry(chapter,type)
            console.log(this.poetry)
        }
    }
}
</script>

<style scoped>
.sishuwujing-detail{
    width: 800px;
}
.sishuwujing-chapter{
    text-align:right;
    padding:0 60px 15px 0;
    font-size: 1.25rem;
    color: gray;
}
.sishuwujing-chapter a:hover{
    color: green;
}
</style>