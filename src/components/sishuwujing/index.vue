<template>
    <div class="poetry shishuwujing-list">
      <div class="inner-wrapper">
        <div class="title">四书五经</div>
        <div class="content" style="text-align:right">
          <p style="padding:10px"><router-link to="/">首页</router-link></p>
        </div>
        <div class="box">
          <el-card shadow='always' class="box-card">
            <div slot="header" class="clearfix" style="text-align:left">
              <span>大学</span>
            </div>
            <ul>
              <li>
                <router-link :to="{
                  name:'SiShuWuJingDetail',           
                  params:{
                    chapter:getChapter('daxue'),
                    type:'daxue'
                }}">{{getChapter('daxue')}}</router-link>
              </li>
            </ul>
          </el-card>           
        </div>
        <div class="box">
          <el-card shadow='always' class="box-card">
            <div slot="header" class="clearfix" style="text-align:left">
              <span>孟子</span>
            </div>
            <ul>
              <li v-for="(chapter,index) in getChapter('mengzi')" :key="index">
                <router-link :to="{
                  name:'SiShuWuJingDetail',
                  params:{
                    chapter:chapter,
                    type:'mengzi'
                  }}">{{chapter}}</router-link>
              </li>
            </ul>
          </el-card>
        </div>
        <div class="box">
          <el-card shadow='always' class="box-card">
            <div slot="header" class="clearfix" style="text-align:left">
              <span>中庸</span>
            </div>
            <ul>
              <li>
                <router-link :to="{
                  name:'SiShuWuJingDetail',
                  params:{
                    chapter:getChapter('zhongyong'),
                    type:'zhongyong'
                  }}">{{getChapter('zhongyong')}}
                </router-link>
              </li>
            </ul>
          </el-card>
        </div>
      </div>
    </div>
</template>

<script>
import {getChapter} from '@/api/sishuwujing/getData'

export default {
  name: 'SiShuWuJing',
  data () {
    return {  
      chapters:[]
    }
  },
  methods:{
      getChapter(type){
          return getChapter(type)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shishuwujing-list{
  width: 500px;
}
.box{
  padding-top: 10px;
  padding-left: 0;
}
.box-card:first-child{
  padding: 10px;
  font-size: 1.2rem;
  color: gray;
}
.box-card ul{
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
}
.box-card ul li{
  width: 100px;
  padding: 10px;
}
a {
  color: #42b983;
}
</style>