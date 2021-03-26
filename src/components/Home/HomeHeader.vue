<template>
  <div class="homeHeader">
    <div class="avatar">
      <img src="../../assets/img/avatar.jpg">
    </div>
    <div class="title">
      <span>命运总司指定</span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .homeHeader {
    width: 100%;
    height: 13rem;
    display: flex;
    background-image: url(../../assets/img/background.png)
  }

  .title  {
    margin-top: 2rem;
    margin-left: 2rem;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    font-size: 1.6rem;
    color: white;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
  }

  .homeHeader img {
    margin-left: 2rem;
    margin-top: 2rem;
    width: 9rem;
    border-radius: 2rem;
  }
</style>