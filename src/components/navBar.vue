<template>
  <div class="navBarContainer" >
    <div class="navBar">
      <div class="barItem" @click="goHome">
        <i class="iconfont icon-icon-test"></i>
        <span>主页</span>
      </div>
      <div class="barItem" @click="goEdit">
        <i class="iconfont icon-jiahao"></i>
        <span>发布</span>
      </div>
      <div class="barItem" @click="goUser">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userinfo: this.$store.state.user,
      textmsg: ''
    }
  },
  methods: {
    goHome() {
      this.$router.replace("/home");
    },
    goEdit() {
      this.$router.replace("/edit");
    },
    goUser() {
      this.$router.replace("/user");
    },
  },
};
</script>

<style>
.navBar {
  background-color: white;
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 5rem;
  box-shadow: 0 -0.5rem 0.5rem #ccc;
}

.navBar .barItem {
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto auto;
}

.navBar input {
  height: 5rem;
  width: 100%;
  border-radius: 2.5rem;
  background-color: rgb(236,236,236);
  font-size: 1.5rem;
  padding: 0;
}
.navBar button {
  width: 20%;
  font-size: 1.5rem;
}
</style>