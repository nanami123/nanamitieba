<template>
  <div class="userHeader">
    <img :src="puserinfo.avatar">
    <div class="userInfo">
      <span class="username">{{puserinfo.username}}</span>
      <span class="introduction">{{puserinfo.introduction}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['puserinfo'],
  data () {
    return {

    }
  },
}
</script>

<style>
  .userHeader {
    width: 100%;
    display: flex;
    font-size: 1.5rem;
    box-shadow: 0 0.2rem 0.2rem #ccc;
  }
  .userHeader img {
    width: 5rem;
    border-radius: 50%;
    margin: 3rem;
  }
  .userHeader .userInfo {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-top: 3rem;
  }

  .userInfo .introduction {
    margin-top: 0.5rem;
    font: 1.2rem;
    color: rgb(170, 170, 170)
  }
</style>