<template>
  <div id="app">
   
    <login1/>
    <router-view/>
    
    
    
    
  </div>
</template>

<script>
import homepage from './components/homepage'
import goods from './components/goods'
import login1 from './components/login1'


 export default {
   name: 'App',
  components:{
    homepage,
    goods,
    login1
   }
    
  
    
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>