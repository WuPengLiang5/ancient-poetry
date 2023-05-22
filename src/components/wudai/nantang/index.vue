<template>
    <div class="nantang-main poetry">
        <div class="title">南唐二主词</div>
        <ul>
            <li><router-link :to="{
                path:'/nantang/detail',
                query:{
                    flag:'intro'
                }}">南唐二主词-简介</router-link>
            </li>
            <li><router-link :to="{
                path:'/nantang/detail',
                query:{
                    flag:'authors'
                }}">南唐二主词-作者</router-link>
            </li>
            <li><router-link :to="{
                name:'NanTangList',
                query:{
                    author:'李璟'
                }}">南唐二主词 李璟篇</router-link>
            </li>
            <li><router-link :to="{
                name:'NanTangList',
                query:{
                    author:'李煜'
                }}">南唐二主词 李煜篇</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'NanTang',
    data(){
        return {

        }
    }
}
</script>

<style scoped>
.nantang-main{
    width: 30%;
    height:45%;
    top: 0;
}
.nantang-main ul{
    padding: 10px;
}
.nantang-main ul li{
    padding:15px 5px;
}
.nantang-main ul li a{
    font-size: 1.5rem;
}
.nantang-main ul li a:hover{
    color: green;
}
</style>