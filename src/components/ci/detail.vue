<template>
  <div class="ci-detail poetry">
      <div class="inner-wrapper" v-show="poetry">
          <h1 class="title">{{poetry.rhythmic}}</h1>
          <div class="author">
              <router-link :to="{
                  name:'AuthorDetail',
                  query:{
                      name:poetry.author
                  }
              }">{{poetry.author}}</router-link>
          </div>
          <div class="content" v-for="(paragraph,index) in poetry.paragraphs" :key="index">
              <p>{{paragraph}}</p>
          </div>
          <br>
          <div class="tags" v-if="activeName == 'song-3'">
              <el-tag v-for="(tag,index) in poetry.tags" :key="index">{{tag}}</el-tag>
          </div>
          <div class="back"><router-link to="/ci">宋词</router-link></div>
      </div>
  </div>
</template>

<script>
import {getPoetry} from '@/api/ci/ci'

export default {
    name:'CiDetail',
    data(){
        return {
            poetry:undefined,
            listQuery:{
                type:undefined,
                author:undefined,
                rhythmic:undefined
            },
           
        }
    },
    computed:{
        id(){
            return this.$route.query.id 
        },
        author(){
            return this.$route.query.author 
        },
        rhythmic(){
            return this.$route.query.rhythmic 
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
            this.listQuery.id = this.id
            this.listQuery.author = this.author
            this.listQuery.rhythmic = this.rhythmic
            if(this.activeName == 'song-3'){
                this.listQuery.type = 'song-3'
                this.poetry = getPoetry(this.listQuery)
            }
            if(this.activeName == 'all-song'){
                this.listQuery.type = 'all-song'
                this.poetry = getPoetry(this.listQuery)
            }
            console.log(this.poetry)
        },
    }
}
</script>

<style scoped>
.ci-detail{
    width: 50%;
    margin: 0 auto;
    background-color: aliceblue;
    opacity: .8;
    top: 10%;
    /* margin-top: 10px; */
}
.ci-detail .title{
    font-weight: normal;
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
    justify-content: center;
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