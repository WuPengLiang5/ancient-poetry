<template>
  <div class="author-detail">
      <div class="head"><h1>{{authorDetail.name}}</h1></div>
      <div class="description">
          <p>{{authorDetail.description}}</p>
          <p>{{authorDetail.name}}{{authorDetail.short_description}}</p>
      </div>
      <div class="el-backtop"><router-link to="/ci">宋词</router-link></div>
  </div>
</template>

<script>
import {getAuthorDetail} from '@/api/ci/ci'

export default {
    name:'AuthorDetail',
    data(){
        return {
             authorDetail:undefined
        }
    },
    computed:{
        name(){
            return this.$route.query.name
        }
    },
    created(){
        this.getAuthorDetail(this.name)
    },
    methods:{
        getAuthorDetail(){
            this.authorDetail = getAuthorDetail(this.name)
            console.log(this.authorDetail)
        }
    }
}
</script>

<style scoped>
.author-detail{
    width: 50%;
    height: 80%;
    overflow: auto;
    margin: 0 auto;
    padding: 20px;
}
.head{
    font-size: 3.5rem;
    float: left;
}
.description p{
    font-size: 1rem;
    letter-spacing: .5rem;
    line-height: 2rem;
    text-align: justify;
}
.description p:nth-child(2){
     text-indent: 4em;
}
.el-backtop:hover {
    background-color: rgb(240, 240, 240);
}
.el-backtop {
    position: fixed;
    background-color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    bottom: 15%;
    right: 25%;
    /* // color: #409eff; */
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    cursor: pointer;
    z-index: 5;
}
.el-backtop a{
    font-size: 1rem;
}
.el-backtop a:hover{
    color: green;
    text-decoration: underline;
}
@media only screen and (max-width: 767px){
    .author-detail{
        width: 90%;
        height: 95%;
        /* padding-top: 0;
        padding-bottom: 0; */
    }
    .author-detail .head{
        font-size: 3rem;
    }
}
</style>