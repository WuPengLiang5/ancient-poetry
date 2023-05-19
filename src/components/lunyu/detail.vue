<template>
  <div class="poetry lunyu-detail">
      <div class="inner-wrapper">
          <div class="title">{{poetry.chapter}}</div>
          <div class="content">
              <p style="text-align:left" v-for="(paragraph,index) in poetry.paragraphs" :key="index">
                {{paragraph}}
              </p>
          </div>
      </div>
  </div>
</template>

<script>
import {getPoetry} from '@/api/lunyu/getData'

export default {
    name:'LunYuDetail',
    data(){
        return {
            poetry:undefined
        }
    },
    computed:{
        chapter:function(){
            return this.$route.params.chapter
        }
    },
    created(){
        this.getPoetry(this.chapter)
    },
    methods:{
        getPoetry(chapter){
            this.poetry = getPoetry(chapter)
            console.log(this.poetry)
        }
    }
}
</script>

<style scoped>
.lunyu-detail{
    width: 660px;
}

</style>