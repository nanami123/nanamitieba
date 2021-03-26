<template>
  <div class="Container">
    <div class="Item">
      <i class="iconfont icon-shoucang1"></i>
      <span>我的收藏</span>
      <span class="sanjiao">></span>
    </div>
    <div class="Item">
      <i class="iconfont icon-lishijilu"></i>
      <span>浏览历史</span>
      <span class="sanjiao">></span>
    </div>
    <div class="Item">
      <i class="iconfont icon-error"></i>
      <span>没有功能</span>
      <span class="sanjiao">></span>
    </div>
    <div class="Item">
      <i class="iconfont icon-error"></i>
      <span>没有功能</span>
      <span class="sanjiao">></span>
    </div>
    <div class="Item" @click="handleLogout">
      <i class="iconfont icon-tuichu"></i>
      <span>退出登录</span>
      <span class="sanjiao">></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogout() {
      this.$store.commit('changeStatus')
      this.$store.commit('changeUser','')
      this.showtoastmsg()
    },
    showtoastmsg() {
      this.$message({
        message: "登出成功",
      });
    },
  }
}
</script>

<style>
  .Container {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    margin-top: 2rem;
    border-radius: 1rem;
  }

  .Container .Item {
    height: 3rem;
    line-height: 3rem;
    font-size: 1.5rem;
    display: flex;
    margin: 1rem;
  }

  .Container .Item i {
    margin-right: 1rem;
  }

  .Container .Item span {
    width: 45%;
  }

  .Container .Item .sanjiao {
    text-align: end;
  }
</style>