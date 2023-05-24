<template>
  <div class="Song_list">
      <div class="inner-wrapper">
      <div class="list">
          <div class="item content" v-for="(item,index) in list" :key="index">
              <p>
                  <router-link :to="{
                      path:'/ci/detail',
                      query:{
                          id:item.id,
                          author:item.author,
                          rhythmic:item.rhythmic,
                          activeName:activeName
                      }
                  }">{{item.rhythmic}}</router-link>
                  <span style="color:#999999">({{item.author}})</span>
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
        },
        activeName:{
            type:String,
            default:''
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
.Song_list{
    height: 200px;
    overflow: auto;
    border: 1px solid #eee;
    background-color: aliceblue;
    margin-top: 20px;
    /* font-size: 20px; */
}
.list{
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
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