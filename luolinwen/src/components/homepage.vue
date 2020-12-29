<template>
    <div class="homepage">
        <div>
        <img src="@/assets/timg.jpg" width="80" height="80">
        <el-input v-model="input" placeholder="请输入搜索内容" style="width:500px"></el-input>
        <el-button type="danger">搜索</el-button>
        
        </div>
        <div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-submenu index="1">
                   <template slot="title">全部分类</template>
                        <el-submenu index="1-1"> 
                            <template slot="title">水果</template>
                                <el-menu-item index="1-1-1"><router-link  :to="{ name: 'showgoods', params: { fruitID: 3}}">苹果</router-link></el-menu-item>
                                <el-menu-item index="1-1-2"><router-link  :to="{ name: 'showgoods', params: { fruitID: 0}}">橙子</router-link></el-menu-item>
                                <el-menu-item index="1-1-3"><router-link  :to="{ name: 'showgoods', params: { fruitID: 5}}">火龙果</router-link></el-menu-item>
                            </el-submenu>

                        <el-submenu index="1-2">
                            <template slot="title">服饰</template>
                                <el-menu-item index="1-2-1">选项1</el-menu-item>
                                <el-menu-item index="1-2-2">选项2</el-menu-item>
                                <el-menu-item index="1-2-3">选项3</el-menu-item>
                        </el-submenu>

                        <el-submenu index="1-3">
                            <template slot="title">零食</template>
                                <el-menu-item index="1-3-1">选项1</el-menu-item>
                                <el-menu-item index="1-3-2">选项2</el-menu-item>
                                <el-menu-item index="1-3-3">选项3</el-menu-item>
                            </el-submenu>               
                </el-submenu>
                <el-menu-item index="2" >首页</el-menu-item>
                <el-menu-item index="3" >闪购</el-menu-item>
                <el-menu-item index="4" >生鲜</el-menu-item>
                <el-menu-item index="5" >团购</el-menu-item>
            </el-menu>

          <div class="size1">   
            <el-carousel :interval="4000" type="broad" height="470px">
                <el-carousel-item v-for="item in imgList" :key="item.id">
                     <img :src="item.idView" class="image">
                </el-carousel-item>
            </el-carousel>
          </div>
          <div class="text">
          <h3>商城头条</h3>
          <router-link to='luolinwen1'><p>[特惠]zzzzzzzzzzzzzzzzzzz</p></router-link>
          <p>[特惠]zzzzzzzzzzzzzzzzzzz</p>
          <p>[特惠]zzzzzzzzzzzzzzzzzzz</p>
          <p>[特惠]zzzzzzzzzzzzzzzzzzz</p>
          <p>[特惠]zzzzzzzzzzzzzzzzzzz</p>
          </div>

 
    


        </div>
      <div>
        <h1>活动</h1>
        <p>每期活动 优惠享不停</p>
      </div>
      <div>
        <img src="@/img/photo1.png">
        <img src="@/img/photo2.png">
        <img src="@/img/photo3.png">
        <img src="@/img/photo4.png">
      </div>  

    
      <div v-for="(item,index) in imgList2" :key="index">
      <table class="zzz">
              <tr>
                <td><router-link  :to="{ name: 'showgoods', params: { fruitID: index}}"><img :src="imgList2[index]" class="image"></router-link></td></tr>             
              <tr>
                <td>{{goodsinformation[index].name}}</td> 
              </tr>
              <tr>
                <td>{{goodsinformation[index].price}}</td>
              </tr>
            </table> 
      </div>

























    </div>

</template>

<script>
import goodsinformation from '../data/goodsinformation.json'
import goods from './goods.vue';
export default {
  components: { goods },
  name: 'homepage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      input:'',
      activeIndex: '1',
      activeIndex2: '1',
      imgList:[
                {id:0,idView:require("../img/logo1.png")},
                {id:1,idView:require("../img/logo4.png")},
                {id:2,idView:require("../img/logo4.jpg")},
                {id:3,idView:require("../img/logo5.png")}

      ],
      imgList2:[],
      goodsinformation:goodsinformation.fruitinformation

    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  mounted: function (){
        var i;
        for(i=1;i<=20;i++){
            this.imgList2.push(require("../img/fruit"+i+".jpg"))
        }
  }

}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .size1{
    height:470px;
    width: 590px;
    margin: auto;
  }
  .text{
    position:absolute;
    left:1200px;
    top:300px;
  }
  .zzz{
    float: left;
    margin-top: 30px;
    margin-left:126px;
    

}
</style>