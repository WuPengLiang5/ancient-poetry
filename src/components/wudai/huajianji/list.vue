<template>
    <div class="list-main poetry">
        <div class="inner-wrapper">
            <div class="list-title">{{currntSequence?currntSequence.nameZn:''}}</div>
            <router-link :to="{name:'HuaJianJi'}">花间集</router-link>
            <ul class="list-titles">
                <li v-for="(item,index) in titles" :key="index">
                <router-link :to="{
                  name:'HuaJianJiDetail',
                  query:{
                      title:item.title,
                      index:book_index
                  }
                }">{{item.author}}.{{item.title}}</router-link>
                </li>
            </ul>
        </div> 
    </div>
</template>

<script>
import {getTitle} from "@/api/huajianji/getData"
import data from '@/api/huajianji/getData'

export default {
    name:'HuaJianJiList',
    data(){
        return {
            titles:[],
            sequences:data.sequences,
            currntSequence:undefined
        }
    },
    computed:{
        book_index(){
            return this.$route.query.book_index
        }
    },
    created(){
        this.getTitle()
    },
    methods:{
        getTitle(){
            console.log(this.book_index)
            this.titles = getTitle(this.book_index)
            this.currntSequence = this.sequences[this.book_index]
        },
    }
}
</script>

<style scoped>
.list-main{
    /* width: 500px; */
    margin: 0 auto;
}
.list-title{
    letter-spacing: 2px;
    font-size: 2.315rem;
    font-weight: 300;
    line-height: 2em;
}
a{
    text-decoration: none;
    cursor: pointer;
    font-size: 1.315rem;
    color: gray;
}
.router-link-active{
    text-decoration: none;
}
.list-titles li{
    padding: 1em 0;
}
ul li{
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>