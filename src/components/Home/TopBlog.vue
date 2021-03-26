<template>
  <div class="topBlog">
    <div class="topItem">
      <span>置顶</span>
      <span class="titlename">今日社保</span>
    </div>
    <div class="topItem">
      <span>置顶</span>
      <span class="titlename">今日社保</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toplist: []
    }
  }
};
</script>

<style>
.topBlog {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  border-bottom: 0.1rem solid #ccc;
}

.topItem {
  color: rgb(100,150,170);
  margin: 0.3rem 1rem;
}

.titlename {
  color: black;
  margin-left: 3rem;
}
</style>