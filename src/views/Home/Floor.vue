<template>
  <div class="infloor">
    <div class="topbar" @click="backtotiezi">
      <i class="el-icon-arrow-left"></i>
      <span>命运总司指定吧</span>
    </div>
    <div class="infloortitleContainer">
      <div class="infloortitle">
        <i class="iconfont icon-error" @click="backtotiezi"></i>
        <span>{{ floorid }}楼的回复</span>
      </div>
    </div>
    <div class="infloorMain">
      <div class="commentMian">
        <div class="userinfo">
          <img :src="floordata.avatar" />
          <div class="infotext">
            <span class="username">{{ floordata.username }}</span>
            <span class="pdata">{{ floordata.pdate }}</span>
          </div>
        </div>
        <div class="commentContent">
          <span>{{ floordata.ptext }}</span>
        </div>
        <el-image
          class="commentContent"
          v-for="(url, index) in floordata.imglist"
          :key="index"
          :src="url"
          lazy
        ></el-image>
      </div>
      <div class="inFloorContainer"> 
        <div class="infloorItem"  v-for="(item, index) in floordata.floorcomments" :key="index">
          <div class="userinfo">
            <img :src="item.avatar" />
            <div class="infotext">
              <span class="username">{{ item.username }}</span>
              <span class="pdata">{{item.date}}</span>
            </div>
          </div>
          <div class="commentContent">
            <span>{{ item.info }}</span>
          </div>          
        </div>
      </div>
    </div>
    <div class="infloorFooter">
      <p>暂无更多回复</p>
    </div>
    <div class="commentqipao" @click="commentfloor(floorid)">
      <i class="iconfont icon-huifu"></i>
      <span>回复</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      floordata: this.$route.query.commentinfo,
      floorid: this.$route.query.floorid,
      pid: this.$route.query.pid,
    };
  },
  methods: {
    backtotiezi() {
      this.$router.replace({
        path: "/tiezi",
        query: { id: this.pid },
      })
    },
    commentfloor(flooridz) {
      this.$router.push({
        path: '/comment',
        query: {
          pid: this.pid,
          floorid: flooridz,
          infloor: true
        }
      })
    }
  },
  mounted() {
    this.$store.commit("changeTieziStatus", true);
  },
  beforeDestroy() {
    this.$store.commit("changeTieziStatus", false);
  },
};
</script>

<style>
.infloor {
  font-size: 1.6rem;
}

.infloor .topbar {
  position: fixed;
  z-index: 998;
  top: 0;
  width: 100%;
  height: 5rem;
  font-size: 1.6rem;
  display: flex;
  background-color: rgb(87,87,87);
}

.infloor .topbar i {
  height: 5rem;
  line-height: 5rem;
  font-size: 3rem;
  width: 10%;
}

.infloor .topbar span {
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  width: 80%;
}

.infloortitleContainer {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  height: 9rem;
  background-color: rgb(87,87,87);
}

.infloortitle {
  position: fixed;
  z-index: 999;
  top: 5rem;
  height: 4rem;
  width: 100%;
  border-radius: 1rem 1rem 0 0;
  background-color: white;
  border-bottom: 0.1rem solid rgb(226, 226, 226);
  display: flex;
  box-shadow: 0 0.3rem 0.5rem #ccc;
}

.infloortitle i {
  font-size: 3rem;
  line-height: 4rem;
  font-size: 3rem;
  width: 10%;
}

.infloortitle span {
  width: 80%;
  line-height: 4rem;
  text-align: center;
}

.infloor .infloorMain {
  margin: 1rem;
}

.infloor .userinfo {
  display: flex;
  margin-bottom: 1rem;
}

.infloor .userinfo .infotext {
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
}

.infloor .userinfo img {
  width: 5rem;
  border-radius: 50%;
}

.infloor .commentMian {
  padding-bottom: 1rem;
  border-bottom: rgb(234, 234, 234) solid 0.3rem;
  margin-top: 10rem;
}

.pdata {
  margin-top: 0.2rem;
  color: rgb(214, 214, 214);
  font-size: 1.4rem;
}

.infloorFooter {
  margin-bottom: 9rem;
  
}

.infloorItem {
  margin: 1rem 0;
  border-bottom: 0.2rem solid rgb(234, 234, 234);
}

.infloorFooter p {
  margin-top: 0.5rem;
  width: 100%;
  font-size: 1.4rem;
  color: rgb(178, 178, 178);
  text-align: center;
}

.commentqipao {
  position: fixed;
  z-index: 999;
  left: 1rem;
  bottom: 6rem;
  width: 6rem;
  height: 6rem;
  background-color: rgb(51, 133, 255);
  color: white;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
}

.commentqipao span {
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
}

.commentqipao .iconfont {
  font-size: 3rem;
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;
}
</style>