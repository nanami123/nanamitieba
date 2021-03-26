<template>
  <div class="cateBarContainer">
    <ul class="cateBar">
      <li class="cateBarItem" :class="{'selected' : index == nowindex}" v-for="(item, index) in barList" :key="item" @click="handleBarItem(index)">{{item}} </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      barList: ['最新','精华','游戏攻略','色图','今日中二','就是想水贴','其他游戏'],
      nowindex: 0
    }
  },
  methods: {
    handleBarItem(index) {
      this.nowindex = index
    }
  }  
}
</script>

<style>
  ul,li {
    list-style:none;
    margin:0;
    padding: 0
  }
  .cateBar {
    margin: 1rem 1rem;
    display: flex;
    height: 2rem;
    overflow: auto;
    white-space: nowrap;
  }
  .cateBar::-webkit-scrollbar {
    display: none;
  }
  .cateBarItem {
    margin: 0 1rem;
    line-height: 2rem;
    font-size: 1.5rem;
  }
  .selected {
    color: rgb(90,100,200);
  }
</style>