<template>
  <div id="app">
   
        <router-link to='/test'><el-link type="success">您好，请登录</el-link></router-link>
        <el-link type="success">注册</el-link>
        <router-link to='/'><el-link type="success">商城首页</el-link></router-link>
        <el-link>
        <i class="el-icon-user-solid"></i> 个人中心
        </el-link>
        <el-link>
        <router-link to='opcar'><i class="el-icon-shopping-cart-2"></i> 购物车</router-link>
        </el-link>
        <el-link>
        <i class="el-icon-star-on"></i> 收藏夹
        </el-link>
        <div>
        </div>  
  </div>
</template>
<script>
export default {
    name:'login1'
}
</script>
