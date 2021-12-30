<template>
  <div id="index">
    <div id="body">
      <div>
        <img src="../assets/map.jpg" width="80%" height="80%" usemap="map" ismap>
        <map name="map" id="map">
            <area shape="rect" coords="0,0,50,50" @click="map"/>
        </map>
      </div>
      <p/>
      <el-input v-model="input" placeholder="请输入id" style="width: 160px"></el-input>
      <p/>
      <el-popover
          placement="top-start"
          title="关于食用"
          width="400"
          trigger="hover"
          content="在首页地图中标出地点或输入id，然后选择查询即可在结果中看见相关路径，景点悬停可以查看相关信息">
        <el-button slot="reference" @click="Result">查询</el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
import Result from "@/Views/Result.vue";
import router from "@/Router";

export default {
  name: "Home",
  data() {
    return {
      input: ''
    }
  },
  methods:{
    map(){
      alert("点击成功！")
    },
    Result()
      {
        router.push(Result)
      }
  }

}
</script>

<style scoped>

</style>