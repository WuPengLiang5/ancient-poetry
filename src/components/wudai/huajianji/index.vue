<template>
  <div>
      <div class="huajianji-main poetry">
        <div class="inner-wrapper">
            <div class="title">花间集</div>
            <p style="text-align:right">
                <router-link to="/" >主页</router-link>
            </p>
            <p>
                <ul>
                    <li v-for="(sequence,index) in sequences" :key="index" class="item content">  
                        <router-link :to="{name:'HuaJianJiList',query:{book_index:index}}">
                            {{sequence.nameZn}}
                        </router-link>       
                    </li>
                </ul>
            </p>
      </div>
        </div>
        
  </div>
</template>

<script>
import data from '@/api/huajianji/getData'

export default {
    name:'HuJianJi',
    data(){
        return {
            sequences:data.sequences,
        }
    },
    created(){
        // console.log(this.sequences)
    },
    methods:{

    }
}
</script>

<style>

.huajianji-main{
    width: 500px;
    height: auto;
    margin: 0 auto;
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
</style>