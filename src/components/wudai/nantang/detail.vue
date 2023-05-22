<template>
    <div class="poetry nantang-detail">
        <div class="inner-wrapper">
            <div v-if="flag == 'intro'">
                <div class="title">{{poetry.title}}-简介</div>
                <div class="content"><router-link to="/nantang">南唐二主词</router-link></div>
                <div class="content" v-for="(item,index) in poetry.desc" :key="index">
                    <p>{{item}}</p>
                </div>
            </div>
            <div v-if="flag == 'authors'">
                <div class="title">{{poetry.name}}南唐二主词-作者</div>
                <div class="content"><router-link to="/nantang">南唐二主词</router-link></div>
                <div class="content">
                    <el-collapse v-model="activeName" accordion>
                        <el-collapse-item  v-for="(item,index) in poetry" :key="index" :title="item.name" :name="index">
                            <p>{{item.desc}}</p>
                        </el-collapse-item> 
                    </el-collapse>                    
                </div>               
            </div>
            <div v-if="title && author">
                <div class="title">{{poetry.title}}</div>
                <div class="content">{{poetry.author}}</div>
                <div class="content paragraph">
                    <p v-for="(item,index) in poetry.paragraphs" :key="index">{{item}}</p>
                </div>
                <div class="content"><router-link :to="{
                    name:'NanTangList',
                    query:{
                        author:poetry.author
                    }}">南唐二主词</router-link></div>
                <h3>注释</h3>
                <div class="notes content">
                    <p v-for="(item,index) in poetry.notes" :key="index">
                        {{item}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getIntro,getAuthors,getPoetryByTitle} from '@/api/nantang/nantang'

export default {
    name:'NanTangDetail',
    data(){
        return {
            poetry:undefined,
            activeName:'0'
        }
    },
    computed:{
        flag(){
            return this.$route.query.flag
        },
        title(){
            return this.$route.query.title
        },
        author(){
            return this.$route.query.author
        }
    },
    created(){
        this.getDetail(this.flag)
    },
    methods:{
        getDetail(flag){
            if(flag == 'intro'){
                this.poetry = getIntro()
            }
            if(flag == 'authors'){
                this.poetry = getAuthors()
            }
            if(this.title && this.author){
                this.poetry = getPoetryByTitle(this.author,this.title)
            }
             console.log(flag,this.poetry)
        }
    }
}
</script>

<style scoped>
.nantang-detail{
    width: 50%;
}
div /deep/ .el-collapse-item__header{
    font-size: 1.315rem!important;
}
div /deep/ .el-collapse-item__content{
    font-size: 1.315rem!important;
}
.nantang-detail .content p{
    text-align: left;
    text-indent: 2em;
}
.nantang-detail .paragraph{
    width: 50%;
    margin: 0 auto;
    /* padding:0 10%; */
}
.content>a:hover:first-child{
    color: green;
}
/* .content>a:hover:nth-child(1){
    color: green;
} */
.nantang-detail h3{
    text-align:left;
    font-size: 1.28571429rem;
    margin-bottom:1rem;
    margin-left: 1.3rem;
}
.notes{
  padding-left: 1em;
  text-align: left;
}
</style>