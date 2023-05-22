<template>
    <div class="nantang-list poetry">
        <div class="title">{{author}}</div>
        <div class="content"><router-link to='/nantang'>南唐二主词</router-link></div>
        <div class="content" v-for="(poetry,index) in poetryList" :key="index">
            <router-link :to="{
                name:'NanTangDetail',
                query:{
                    author:poetry.author,
                    title:poetry.title
            }}">{{poetry.title}}</router-link>
        </div>
    </div>
</template>

<script>
import {getPoetrysByAuthor} from '@/api/nantang/nantang'

export default {
    name:'NanTanglList',
    data(){
        return {
            poetryList:[]
        }
    },
    computed:{
        author(){
            return this.$route.query.author
        }
    },
    created(){
        this.getPoetryList(this.author)
    },
    methods:{
        getPoetryList(author){
            this.poetryList = getPoetrysByAuthor(author)
        }
    }
}
</script>

<style scoped>
.nantang-list{
    width: 50%;
}
.nantang-list>div:nth-child(2) a:hover{
    color: aqua;
}
.content a:hover{
    color: green;
}
</style>