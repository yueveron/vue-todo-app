<template>
  <div id="app">
    <div class="main">
      <div class="sidebar">
        <div class="sidebar-inner">
          <SideBar></SideBar>
        </div>
      </div>

      <div class="workplace">
        <WorkPlace></WorkPlace>
      </div>
    </div>
  </div>
</template>

<script>
import WorkPlace from './views/WorkPlace.vue'
import SideBar from './views/SideBar.vue'


export default {
  name: 'app',
  components: {
    WorkPlace,
    SideBar
  },
  data(){
    return {
    }
  },
  methods: {      
  },
}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    height: auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main{
    position: relative;
    z-index: 1;
    padding: 0 60px 30px;
    overflow-x: hidden;
  }
  .sidebar {
    position: fixed;
    z-index: 10;
    top: 0px;
    left: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    background-color:#eee;
    @at-root #{&}-inner{
      width: 260px;
      padding: 40px 20px 60px 60px;
    }
  }  
  .workplace{
    margin-left: 290px;
    position: relative;
    padding: 2.2em 0;
    max-width: 600px;
    margin: 0 auto;
    padding-left: 50px;
  }
</style>
