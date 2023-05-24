<template>
  <div ref='home' class="home">
    <div class="nav" v-show="isShow">
      <el-row class="row-con">
        <el-col>
          <el-card shadow="hover" class="card">
            <router-link to="/shijing" @click.native="changeShow()">诗经</router-link>
          </el-card>
        </el-col>
      </el-row>
      <el-row class="row-con">
        <el-col>
          <el-card shadow="hover" class="card">
            <router-link to="/sishuwujing" @click.native="changeShow()">四书五经</router-link>
          </el-card>
        </el-col>
      </el-row>
      <el-row class="row-con">
        <el-col>
          <el-card shadow="hover" class="card">
            <router-link to="/lunyu" @click.native="changeShow()">论语</router-link>
          </el-card>
        </el-col>
       </el-row>
      <el-row class="row-con">
        <el-col>
          <el-card shadow="hover" class="card">
            <router-link to="/huajianji" @click.native="changeShow()">花间集</router-link>
          </el-card>
        </el-col>
      </el-row> 
      <el-row class="row-con">
        <el-col>
          <el-card shadow="hover" class="card">
            <router-link to="/nantang" @click.native="changeShow()">南唐二主词</router-link>
          </el-card>
        </el-col>
      </el-row> 
       <el-row class="row-con">
        <el-col>
          <el-card shadow="hover" class="card">
            <router-link to="/tangshi" @click.native="changeShow()">唐诗</router-link>
          </el-card>
        </el-col>
      </el-row> 
      <el-row class="row-con">
        <el-col>
          <el-card shadow="hover" class="card">
            <router-link to="/ci" @click.native="changeShow()">宋词</router-link>
          </el-card>
        </el-col>
      </el-row> 
    </div>
    <router-view/>
  </div>
</template>

<script>
import allData from '@/api/getData'

export default {
  name: 'HomePage',
  data () {
    return {  
      isShow:true,
       windowHeight:document.documentElement.clientHeight,
    }
  },
  created(){
    if(this.$route.path == '/'){
      this.isShow = true
    }else{
      this.isShow = false
    }
    // console.log(this.$route.path,this.isShow)
  },
  mounted(){
    // console.log('mounted')
    var that = this;
    // <!--把window.onresize事件挂在到mounted函数上-->
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        window.fullWidth = document.documentElement.clientWidth;
        that.windowHeight = window.fullHeight;  // 高
        that.windowWidth = window.fullWidth; // 宽
      })()
    };
  },
  watch:{
    $route(newVal,oldVal){
      // console.log(newVal.path,oldVal.path)
      if(newVal.path === '/'){
        this.isShow = true
      }
    },
    windowHeight(newVal,oldVal){
      if(newVal < 505){
        this.$refs.home.style.height = '575px'
      }else{
        this.$refs.home.style.height = '100%'
      }
        // console.log(newVal,oldVal)
    }
  },
  methods:{
    changeShow(){
      this.isShow = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  background-image: url('~@/assets/images/ying.jpeg');
  /* height: 575px; */
  width: 100%;
  height: 100%;
  min-height: 320px;
  background-size: cover;
  margin: 0!important;
  background-repeat: no-repeat;
  opacity: 0.8;
}
.nav{
  padding: 10px;
  margin: 0 auto;
  padding-top: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-size: 1.5em;
}
.nav a{
  padding: 10px;
}
.nav a:hover{
  color: green;
}
.row-con {
  display: flex;
  flex-flow: row wrap;
}
.row-con .card {
  width: 200px;
  height: 100%;
  opacity: 0.6;
}
</style>
