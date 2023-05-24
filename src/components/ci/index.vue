<template>
  <div class="ci-container">
      <div class="title">宋词</div>
      <div class="home-link"><router-link to="/">主页</router-link></div>
      <div class="section content">
          <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
            <el-tab-pane label="全宋词" name='all-song'>
            <div class="category">
                <div class="category__title">
                    作者
                </div>
                <div :class="isActive?'category__content_active':'category__content'">
                    <a class="category__item" :class="currentIndex == index?'activeCss':''" 
                        @click="getPoetryList('all-song',item.name,index)"
                        href="javascript:;" v-for="(item,index) in authors" :key="index">
                        {{item.name}}
                    </a>
                </div>
                <div class="category__icon">
                    <i :class="isActive? 'el-icon-arrow-up':'el-icon-arrow-down'" @click="clickType()"></i>
                </div>               
            </div>
            <div class="category">
                <div class="category__title">
                    题目
                </div>
                <div class="category__input">
                    <el-input v-model="listQuery.rhythmic" size="small" placeholder="请输入内容" clearable></el-input>
                    <el-button type="primary" size="small" @click="getPoetryList('all-song')">
                        <i class="el-icon-search">搜索</i></el-button>
                </div>
            </div>
            </el-tab-pane>
            <el-tab-pane label="宋词三百首" name='song-3'>
            <div class="category">
                <div class="category__title">
                    作者
                </div>
                <div :class="isActive?'category__content_active':'category__content'">
                    <a class="category__item" 
                        :class="currentIndex == 'all'?'activeCss':''" 
                        href="javascript:;" @click="getPoetryList('song-3','all','all')">
                            全部
                    </a>
                    <a class="category__item" :class="currentIndex == index?'activeCss':''" 
                        @click="getPoetryList('song-3',item.name,index)"
                        href="#" v-for="(item,index) in authors" :key="index">
                        {{item.name}}
                    </a>
                </div>
                <div class="category__icon">
                    <i :class="isActive? 'el-icon-arrow-up':'el-icon-arrow-down'" @click="clickType()"></i>
                </div>               
            </div>
            <div class="category">
                <div class="category__title">
                    题目
                </div>
                <div class="category__input">
                    <el-input v-model="listQuery.rhythmic" size="small" placeholder="请输入内容" clearable></el-input>
                    <el-button type="primary" size="small" @click="getPoetryList('song-3')">
                    <i class="el-icon-search">搜索</i></el-button>
                </div>
            </div>
            </el-tab-pane>
          </el-tabs>
          <list :list="poetryList" :activeName="activeName"></list>
      </div>
      
  </div>
</template>

<script>
import {getAllAuthor,getPoetryList} from '@/api/ci/ci'
import list from '../ci/components/list.vue'

export default {
  components: { list },
    name:'Ci',
    data(){
        return {
            activeName:'all-song',
            authors:[],
            listQuery:{
                type:'',
                rhythmic:'',
                author:''
            },
            poetryList:[],
            isActive:false,
            currentIndex:'all'
        }
    },
    created(){
        // console.time('test')
        this.getAllAuthor()
        // console.timeEnd('test')
    },
    methods:{
        getAllAuthor(){
            this.authors = getAllAuthor()
            // console.log(this.authors)
        },
        handleClick(tab, event){
            this.activeName = tab.name
            this.isActive = false
            this.listQuery.rhythmic = undefined
            console.log(tab.name,this.listQuery)
            if(tab.name == 'all-song'){
                this.getPoetryList('all-song','nothing','nothing')
            }else{
                this.getPoetryList('song-3','all','all')
            }
        },
        clickType(){
            this.isActive = !this.isActive
        },
        getPoetryList(type,author,index){
            
            if(index != undefined){
                if(this.currentIndex == index){
                    this.currentIndex = 'all'
                    this.listQuery.author = type == 'all-song'?'nothing':'all'
                }else{
                    this.currentIndex = index
                    this.listQuery.author = author
                }
            }
            this.listQuery.type = type
            this.poetryList = getPoetryList(this.listQuery)
            // console.log(this.poetryList)
        }
    }
}
</script>

<style scoped>
.home-link{
    font-size: 1.5rem;
}
.home-link a{
    cursor: pointer;
    color: #333;
}
.home-link a:hover{
    color: green;
    text-decoration: underline;
}
.section{
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    padding: 1.428571rem;
}
@media only screen and (max-width: 767px){
    .ci-container .section{
        width: 100%;
        padding: 0;
    }
}
.section /deep/ .el-tabs__item{
  font-size: 1rem!important;
}
.category{
    font-size: 0;
    position: relative;
    padding-left: 3rem;
    padding-right: 20px;
    box-sizing: border-box;
    margin-bottom: 10px;
    text-align: left;
}
.category__title{
    font-size: 1rem;
    color: #333;
    line-height: 1.8;
    margin: 0;
    position: absolute;
    left: 0;
    top: 0;
}
.category__input{
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1rem;
}
.category__input .el-input{
  width: 50%;
  padding-right: 10px;
}
.category__content_active{
  height: 200px;
  overflow: auto;
}
.category__content{
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.category__item {
    font-size: 1rem;
    color: #333;
    line-height: 1.8;
    margin: 0 10px 5px 0;
    padding: 0 7px;
    display: inline-block;
    transition: 0.3s;
}
.category__icon{
  width: 1rem;
  font-size: 1rem;
  margin: 0;
  position: absolute;
  right: 0;
  top: -5px;
}
.category__icon i{
  cursor: pointer;
}
/* 选中时的样式 */
.activeCss {
	background-color: #FFE9D2;
	color: #ff6f0d;
}
</style>