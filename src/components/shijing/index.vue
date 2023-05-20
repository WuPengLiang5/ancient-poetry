<template>
    <div class="shijing-list poetry ">
      <div class="inner-wrapper">
        <div class="title">诗经</div>
        <div class="content" style="text-align:right">
          <p style="padding:10px"><router-link to="/">首页</router-link></p>
        </div>
        <div class="box" v-for="(chapter_section,index) in shijing_chapter_sections" :key="index">
          <el-card shadow='always' class="box-card">
            <div slot="header" class="clearfix" style="text-align:left">
              <span>{{chapter_section[0].chapter}}.{{chapter_section[0].section}}</span>
            </div>
            <ul>
              <li v-for="(item,index) in chapter_section" :key="index">
                <router-link :to="{
                  name:'shijingDetail',
                  params:{
                    title:item.title}}">{{item.title}}</router-link>
              </li>
            </ul>
          </el-card>
        </div>
      </div>
    </div>
</template>

<script>
import allData from '@/api/shijing/getData'

export default {
  name: 'ShiJing',
  data () {
    return {  
      list:allData.shijing,
      shijing_chapter_sections:allData.shijing_chapter_sections
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shijing-list{
  /* width: 500px; */
  width: 50%;
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
  width: 20%;
  padding: 10px;
}
a {
  color: #42b983;
}
</style>