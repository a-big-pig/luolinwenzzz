<template>
    <div id="goods">
        <div v-for="item in imgList" :key="item.id">
            <div  class="zzz">
               <img :src="item.idView" class="image">
            </div>
          
            
        </div>

    </div>
</template>

<script>
export default {
    name:'goods',
    data(){
        return{
             imgList:[]
        }
        
    },
    mounted: function (){
        var i;
        for(i=1;i<=8;i++){
            this.imgList.push
            ({id:i,idView:require("../img/"+i+".jpg")})
        }
    }
}

</script>
<style>
.zzz{
    float: left;

}
</style>