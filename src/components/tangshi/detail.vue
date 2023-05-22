<template>
  <div class="tangshi-detail poetry">
      <div class="inner-wrapper" v-show="poetry">
          <div class="title">{{poetry.title}}</div>
          <div class="author">{{poetry.author}}</div>
          <div class="content" v-for="(paragraph,index) in poetry.paragraphs" :key="index">
              <p>{{paragraph}}</p>
          </div>
          <br>
          <div class="tags" v-if="activeName == 'tang-3'">
              <el-tag v-for="(tag,index) in poetry.tags" :key="index">{{tag}}</el-tag>
          </div>
          <div class="back"><router-link to="/tangshi">唐诗</router-link></div>
      </div>
  </div>
</template>

<script>
import {getPoetryById,getTangPoetryById,getSongPoetryById} from '@/api/tangshi/tangshi'

export default {
    name:'TangPoetryDetail',
    data(){
        return {
            poetry:undefined
        }
    },
    computed:{
        id(){
            return this.$route.query.id
        },
        activeName(){
            return this.$route.query.activeName
        }
    },
    created(){
        this.getPoetry()
    },
    methods:{
        getPoetry(){
            if(this.activeName == 'tang-3'){
                this.poetry = getPoetryById(this.id)
            }
            if(this.activeName == 'tang'){
                getTangPoetryById(this.id).then(res => {
                    this.poetry = res
                })
            }
            if(this.activeName == 'song'){
                getSongPoetryById(this.id).then(res => {
                    this.poetry = res
                })
            }
            console.log(this.poetry)
        }
    }
}
</script>

<style scoped>
.tangshi-detail{
    width: 50%;
    margin: 0 auto;
    background-color: aliceblue;
    opacity: .8;
    top: 10%;
    /* margin-top: 10px; */
}
.author{
    padding: 10px 0;
    letter-spacing: 0.142857rem;
    font-size: 1.315rem;
    font-weight: 300;
    line-height: 1em;
}
.tags{
    width: 40%;
    margin: 0 auto;
    border-top: 1px solid #DAD9D1;
    padding:5px 10px 0 10px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.back{
    margin-top: 10px;
}
.back a:hover{
    color: green;
    text-decoration: underline;
}
</style>