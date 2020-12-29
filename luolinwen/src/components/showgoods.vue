<template>
    <div id="showgoods">
        <!-- {{this.$route.params.fruitID}} -->


        <div class="pic1">
            <img   :src="imgurl" class="image">
            
        </div>
         <div class="div1">
             <table>
                 <tr >
                     <td>{{goodsinformation[s].name}}</td>
                     <td></td>
                 </tr>
                 <tr>
                     <td>价格：</td>
                     <td>{{goodsinformation[s].price}}</td>
                 </tr>
                 <tr>
                     <td>商品编号:</td>
                     <td>{{goodsinformation[s].number}}</td>
                 </tr>
                 <tr>
                     <td>产地:</td>
                     <td>{{goodsinformation[s].origin}}</td>
                 </tr>
                  <tr>
                     <td>类型:</td>
                     <td>{{goodsinformation[s].type}}</td>
                 </tr>
                 <tr>
                     <td>
                        <el-button @click="minus"><i class="el-icon-minus"></i></el-button>
                         {{counter}}
                        <el-button @click="plus"><i class="el-icon-plus"></i></el-button>
                     </td>
                    <td>
                        <router-link to='opcar'>
                        <el-button type="danger" plain>
                            加入购物车
                        </el-button>
                        </router-link>
                    </td>
                 </tr>
             </table>
         </div>

     </div>
        
  

</template>
<script>
import goodsinformation from '../data/goodsinformation.json'

export default{
    name:"showgoods",
    data(){
        return{
            s:0,
            s2:0,
            imgurl:"",
            goodsinformation:goodsinformation.fruitinformation,
            counter:0
            
        }

    },
    mounted:function(){
        this.s=this.$route.params.fruitID;
        this.s2=this.s+1;
        this.imgurl=require("../img/fruit"+this.s2+".jpg");
    },
    methods:{
        minus(){
            if(this.counter>=1)
            this.counter--
        },
        plus(){
            this.counter++
        }

    }
}
</script>
<style scoped>
tr,td{
    width:150px;
    height: 40px;
    align-content: center;
}
.pic1{
    position: absolute;
    left: 200px;
    top:200px
}
.div1{
    position:absolute;
    left:800px;
    top:200px;
}
</style>
