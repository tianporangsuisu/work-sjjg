<template>
  <div id="back">
    <div id="full">
      <div id="head1">
        <header>游客导游系统</header>
        <hr/>
      </div>
      <div id="nav">
        <router-link to="/">
          <el-button >首页</el-button>
        </router-link> |
        <router-link to="/Result">
          <el-button>结果</el-button>
        </router-link>
      </div>
      <hr/><p/>
      <router-view/><p/>
      <hr/><p/>
      <div id="foot">
        <p>关于系统</p>
        <p>本系统旨在帮助游客选择适宜路线</p>
        <p>作者信息：高凌志 肖梽伟 xxx</p>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
  }
}
</script>

<style>

#head1{
  font-size: xxx-large;
}

#back {
  text-align:center;
  background: url("../src/assets/R-C.png") fixed;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
#full{
  border: 1px solid;
  margin-left: 15%;
  margin-right: 15%;
  background: azure;
  width: 70%;
}
#nav{
  margin-bottom: 15px;
}
#foot{
  bottom: 0;
}
</style>
