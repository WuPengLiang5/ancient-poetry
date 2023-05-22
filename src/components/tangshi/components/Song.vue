<template>
  <div class="Tang_Three_list">
      <div class="inner-wrapper">
           <!-- <div class="title">唐诗三百首</div> -->
      <div class="list">
          <div class="item content" v-for="(item,index) in list" :key="index">
              <p>
                  <span style="color:#333">{{item.author}}</span>
                  <router-link :to="{
                      path:'/tangshi/detail',
                      query:{
                          id:item.id,
                      }
                  }">{{item.title}}</router-link>
              </p>
          </div>
      </div>
      </div>
     
 </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Array,
            default:[]
        }
    },
    name:'Song',
    data(){
        return {

        }
    },
    created(){
        // console.log(this.list)
    }
}
</script>

<style>
.Tang_Three_list{
    height: 200px;
    overflow: auto;
    border: 1px solid #eee;
    background-color: aliceblue;
    margin-top: 20px;
    /* font-size: 20px; */
}
.list{
    text-align: left;
}
.item{
    padding: 0;
    padding-top: .5em;
    padding-bottom: .5em;
}
.content p a{
    color: green;
}
.item:hover{
    background: rgba(0,0,0,.03);
    color: rgba(0,0,0,.8);
}
.item:hover a{
    color: #2c3e50;
}
</style>