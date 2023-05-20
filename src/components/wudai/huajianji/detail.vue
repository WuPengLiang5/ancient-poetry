<template>
  <div class="poetry huajianji-detail" style="width:500px">
    <div class="inner-wrapper">
        <div class="title">{{poetry.title}}</div>
        <div class="author">{{poetry.author}}</div>
        <div class="content" style="padding-left:1em">
          <p v-for="(paragraph,index) in poetry.paragraphs" :key="index">
            {{paragraph}}
          </p>
        </div>
        <div class="meta content">
          <router-link 
            :to="{name:'HuaJianJiList',query:{book_index:book_index}}">
               {{currntSequence.nameZn}}
          </router-link>
        </div>
        <div>
        <h3 style="text-align:left;font-size: 1.28571429rem;margin-bottom:1rem">注释</h3>
        <div class="notes content">
            <p v-for="(note,index) in poetry.notes" :key="index">
              {{note}}
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getPoetry} from '@/api/huajianji/getData'
import data from '@/api/huajianji/getData'

export default {
    name:'HuaJianJiDetail',
    data(){
        return {
          poetry:undefined,
          sequences:data.sequences,
          currntSequence:undefined
        }
    },
    computed:{
      book_index(){
        return this.$route.query.index
      },
      title(){
        return this.$route.query.title
      }
    },
    created(){
      this.getPoetry(this.book_index,this.title)
      this.currntSequence = this.sequences[this.book_index]
    },
    methods:{
      getPoetry(book_index,title){
        // console.log(book_index,title)
        this.poetry = getPoetry(book_index,title)
      }
    }
}
</script>

<style scoped>
.author{
    padding-top: .5em;
    padding-bottom: .5em;
    color: gray;
    letter-spacing: 2px;
    font-size: 1.315rem;
    font-weight: 300;
    line-height: 1.8;
}
.huajianji-detail .content p{
  text-align: left;
}
.meta{
  text-align: right;
}
.notes{
  padding-left: 1em;
  text-align: left;
}
</style>