<template>
  <div class="poetry shijing-detail">
      <div class="title">{{title}}</div>
      <div class="shijing-chapter">
          <p>
              <router-link to='/shijing'>{{poetry.chapter}}.{{poetry.section}}</router-link>
          </p>
      </div>
      <div class="content">
          <p v-for="(content,index) in poetry.content" :key="index">
            {{content}}
            <br/>
          </p>
      </div>
  </div>
</template>

<script>
import {getPoetry} from '@/api/shijing/getData'

export default {
    name: 'shijingDetail',
    data () {
        return {  
            poetry:undefined
        }
    },
    computed:{
        title:{
            get(){
                 return JSON.parse(localStorage.getItem("rowData")).title
            },
            set(val){

            }
        }
    },
    mounted(){
       
    },
    created(){
        // console.log(this.$route.params)
        if(this.$route.params && Object.keys(this.$route.params).length !== 0){
            window.localStorage.setItem('rowData', JSON.stringify(this.$route.params))
        }else{
            this.title = JSON.parse(localStorage.getItem('rowData')).title
        }
        this.poetry = getPoetry(this.title)
        // console.log('created')
    },
    beforeDestory() {
        localStorage.removeItem('rowData')
    },
    methods:{
        // 防止浏览器后退
        stopF5Refresh() {
            document.onkeydown = function (e) {
            var evt = window.event || e;
            var code = evt.keyCode || evt.which;
            //屏蔽F1---F12
            if (code > 111 && code < 124) {
                if (evt.preventDefault) {
                evt.preventDefault();
            } else {
                evt.keyCode = 0;
                evt.returnValue = false;
            }
        }
      };
      //禁止鼠标右键菜单
      document.oncontextmenu = function () {
        return false;
      };
      //阻止后退的所有动作，包括 键盘、鼠标手势等产生的后退动作。
      history.pushState(null, null, window.location.href);
      window.addEventListener("popstate", function () {
        history.pushState(null, null, window.location.href);
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shijing-detail{
    width: 600px;
}
.shijing-chapter{
    text-align:right;
    padding:0 88px 15px 0;
    font-size: 1.25rem;
    color: gray;
}
.shijing-chapter a:hover{
    color: green;
}
</style>