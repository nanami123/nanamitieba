<template>
  <div class="home">
    <HomeHeader/>
    <TopBlog/>
    <CateBar/>
    <BlogList/>
  </div>
</template>

<script>
import HomeHeader from "../../components/Home/HomeHeader.vue"
import TopBlog from "../../components/Home/TopBlog.vue"
import CateBar from "../../components/Home/CateBar.vue"
import BlogList from "../../components/Home/BlogList.vue"
export default {
  name: "Home",
  components: {
    HomeHeader,
    TopBlog,
    CateBar,
    BlogList
  },
};
</script>

<style>

</style>
