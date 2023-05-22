<template>
  <div>
    <div class="title">唐诗</div>
    <div class="section content">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
      <el-tab-pane label="全唐诗" name='tang'>
        <div class="category">
          <div class="category__title">
            作者
          </div>
          <div :class="controlChanges[0].type == 'author' && controlChanges[0].isActive?'category__content_active':'category__content'">
            <a class="category__item" :class="controlChanges[0].index == index?'activeCss':''" href="#" @click="searchAllPoetry('tang',item.name,index)"
              v-for='(item,index) in all_tang_author' :key="index">
                {{item.name}}
            </a>
          </div>
          <div class="category__icon">
            <i :class="controlChanges[0].type == 'author' && controlChanges[0].isActive? 'el-icon-arrow-up':'el-icon-arrow-down'" @click="clickType('author')"></i>
          </div>
        </div>
        <div class="category">
          <div class="category__title">
            题目
          </div>
          <div class="category__input">
            <el-input v-model="listQuery.title" size="small" placeholder="请输入内容" clearable></el-input>
            <el-button type="primary" size="small" @click="searchAllPoetry('tang')">
              <i class="el-icon-search">搜索</i></el-button>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="全宋诗" name='song'>
         <div class="category">
          <div class="category__title">
            作者
          </div>
          <div :class="controlChanges[0].type == 'author' && controlChanges[0].isActive?'category__content_active':'category__content'">
            <a class="category__item" :class="controlChanges[0].index == index?'activeCss':''" href="#" @click="searchAllPoetry('song',item.name,index)"
              v-for='(item,index) in all_song_author' :key="index">
                {{item.name}}
            </a>
          </div>
          <div class="category__icon">
            <i :class="controlChanges[0].type == 'author' && controlChanges[0].isActive? 'el-icon-arrow-up':'el-icon-arrow-down'" @click="clickType('author')"></i>
          </div>
        </div>
        <div class="category">
          <div class="category__title">
            题目
          </div>
          <div class="category__input">
            <el-input v-model="listQuery.title" size="small" placeholder="请输入内容" clearable></el-input>
            <el-button type="primary" size="small" @click="searchAllPoetry('song')">
              <i class="el-icon-search">搜索</i></el-button>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="唐诗三百首" name='tang-3'>
        <div class="category">
          <div class="category__title">
            类型
          </div>
          <div :class="controlChanges[1].type == 'tags' && controlChanges[1].isActive?'category__content_active':'category__content'">
            <a class="category__item" 
              :class="controlChanges[1].index == 'all'?'activeCss':''" 
              href="#" @click="searchPoetry('','all','all')">
                全部
            </a>
            <a class="category__item" :class="controlChanges[1].index == index?'activeCss':''" href="#" @click="searchPoetry('',item,index)"
              v-for='(item,index) in tags.tags' :key="index">
                {{item}}
            </a>
          </div>
          <div class="category__icon">
            <i :class="controlChanges[1].type == 'tags' && controlChanges[1].isActive? 'el-icon-arrow-up':'el-icon-arrow-down'" @click="clickType('tags')"></i>
          </div>
        </div>
        <div class="category">
          <div class="category__title">
            作者
          </div>
          <div :class="controlChanges[0].type == 'author' && controlChanges[0].isActive?'':'category__content'">
            <a class="category__item" :class="controlChanges[0].index == 'all'?'activeCss':''" 
                href="#" @click="searchPoetry('all','','all')">
                全部
            </a>
            <a class="category__item" :class="controlChanges[0].index == index?'activeCss':''" href="#" @click="searchPoetry(item,'',index)"
              v-for='(item,index) in tags.author' :key="index">
                {{item}}
            </a>
          </div>
          <div class="category__icon">
            <i :class="controlChanges[0].type == 'author' && controlChanges[0].isActive? 'el-icon-arrow-up':'el-icon-arrow-down'" @click="clickType('author')"></i>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- <component :is="componentName" :list="poetryList"></component> -->
    <TangThreeVue :list="poetryList" :activeName="activeName"></TangThreeVue>

    </div>
    
  </div>
</template>

<script>
import TangThreeVue from './components/Tang_Three.vue'
// import TangVue from './components/Tang.vue'
// import SongVue from './components/Song.vue'

import {
  getTags, 
  searchPoetryList,
  getAllTangAuthor,
  getAllSongAuthor,
  searchAllPoetry} from '@/api/tangshi/tangshi'

export default {
    components:{
      TangThreeVue,
    },
    name:'TangPoetry',
    data(){
        return {
             poetryList:[],
             activeName: 'tang',
             tags:[],
             all_tang_author:[],
             all_song_author:[],
             listQuery:{
                'type':undefined,
                'author':undefined,
                'tags':undefined,
                'title':undefined
             },
            //  componentName:'TangVue',
             controlChanges:[{
                'type':'author',//作者
                'isActive':false,
                'index':'all'
              },
              {
                'type':'tags',//类型
                'isActive':false,
                'index':'all'
              }]
        }
    },
    created(){
      this.searchAllPoetry()
      if(this.activeName === 'tang'){
        this.all_tang_author = getAllTangAuthor()
      }
    },
    methods: {
      handleClick(tab, event) {
        this.activeName = tab.name
        this.controlChanges = [{
          'type':'author',//作者
          'isActive':false,
          'index':'all'
        },
        {
          'type':'tags',//类型
          'isActive':false,
          'index':'all'
        }]
        if(tab.name === 'tang-3'){
          // this.componentName = 'Tang_ThreeVue'
          this.searchPoetry('all','all','all')
          this.tags = getTags()
        }
        if(tab.name === 'tang'){
          // this.componentName = 'TangVue'
          this.all_tang_author = getAllTangAuthor()
          this.searchAllPoetry()
        }
        if(tab.name === 'song'){
          // this.componentName = 'SongVue'
          this.all_song_author = getAllSongAuthor()
          this.searchAllPoetry()
        }
      },
      //改变收起展开图标
      clickType(type){
        this.controlChanges.forEach(item => {
          if(type == item.type){
            item.isActive = !item.isActive
            item.type = type
          }
        })
      },
      //唐诗三百首搜索
      searchPoetry(author,tags,index){
        if(author != ''){
          this.listQuery.author = author
          this.controlChanges[0].index = index
        }
        if(tags != ''){
          this.listQuery.tags = tags
          this.controlChanges[1].index = index
        }
        this.poetryList = searchPoetryList(this.listQuery)
        // console.log(this.poetryList)
      },
      //所有唐诗、宋诗的搜索
      searchAllPoetry(type,author,index){    
        if(index != undefined){
          this.controlChanges[0].index = index
        }
        this.listQuery.type = type        
        if(author != ''){
          this.listQuery.author = author
        }
        searchAllPoetry(this.listQuery).then(res => {
          this.poetryList = res
        })
      }
    }
}
</script>

<style scoped>
.section{
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}
.section /deep/ .el-tabs__item{
  font-size: 1rem!important;
}
/* .section /deep/ .el-tabs__content{
  font-size: 1.8rem!important;
} */
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