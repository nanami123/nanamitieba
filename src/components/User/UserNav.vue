<template>
  <div class="navContainer">
    <div class="navItem">
      <i class="iconfont icon-information"></i>
      <span>个人空间</span>
    </div>
    <div class="navItem" @click="goEditInfo">
      <i class="iconfont icon-qianming"></i>
      <span>编辑资料</span>
    </div>
    <div class="navItem">
      <i class="iconfont icon-tiezi"></i>
      <span>我的帖子</span>
    </div>
    <div class="navItem">
      <img src="../../assets/img/blhx.png">
      <span>碧蓝幻想</span>
    </div>
  </div>
</template>

<script>
export default {
  
  methods: {
    goEditInfo() {
      this.$router.push({
        path: '/infosetting', 
        query: { userid: this.$store.state.user.userid}
      })
    }
  }
}
</script>

<style>
  .navContainer {
    font-size: 1.5rem;
    margin: 1rem;
    border-radius: 1rem;
    display: flex;
    box-shadow: 0.3rem 0.3rem 1rem #ccc;
  }
  .navContainer .navItem {
    margin: 1rem;
    align-items: center;
    width: 25%;
    display: flex;
    flex-direction: column;
  }

  .navContainer .iconfont {
    font-size: 2.5rem;
  }

  .navContainer img {
    width: 2.5rem;
  }
</style>