<template>
  <div class="tiezi">
    <div class="topbar">
      <i class="el-icon-arrow-left" @click="backToHome"></i>
      <div class="tiebatitle">
        <span>命运总司指定吧</span>
      </div>
    </div>
    <div class="tieziHeader">
      <div class="userinfo">
        <img :src="titledata.avatar" />
        <div class="infotext">
          <span class="username">{{ titledata.username }}</span>
          <span class="pdata">{{ titledata.pdate }}</span>
        </div>
      </div>
      <div class="pinfo">
        <span>{{ titledata.ptext }}</span>
      </div>
      <div class="imglist">
        <div class="imgItem" v-for="item in titleimgdata" :key="item.pimgid">
          <img :src="item.imgurl" />
        </div>
      </div>
    </div>
    <div class="tieziMain">
      <div class="commentItem" v-for="(item, index) in comment" :key="index">
        <div class="userinfo">
          <img :src="item.avatar" />
          <div class="infotext">
            <span class="username">{{ item.username }}</span>
            <span class="pdata">{{ item.pdate }}</span>
          </div>
        </div>
        <div class="commentContent">
          <span>{{ item.ptext }}</span>
        </div>
        <el-image
          class="commentContent"
          v-for="(url, index) in item.imglist"
          :key="index"
          :src="url"
          lazy
        ></el-image>
        <div class="commentfloor">
          <span v-if="item.haveinfloor" class="seemorebtn" @click="handleSeeMoreComment(item.floorid)">查看回复</span>
          <span class="commentbtn" @click="commentfloor(item.floorid)">回复</span>
        </div>
      </div>
    </div>
    <div class="tiezifooter">
      <span>没有更多回复了qwq</span>
    </div>
    <div class="commentqipao" @click="commenttiezi">
      <i class="iconfont icon-huifu"></i>
      <span>回复</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pid: this.$route.query.id,
      titledata: "",
      titleimgdata: "",
      comment: [],
    };
  },
  methods: {
    backToHome() {
      this.$router.replace("/home");
    },
    handleSeeMoreComment(index) {
      console.log(index)
      this.$router.push({
        path: '/floor',
        query: {
          pid: this.pid,
          floorid: index,
          commentinfo: this.comment[index-1]
        }
      })
    },
    commenttiezi() {
      this.$router.push({
        path: '/comment',
        query: {
          pid: this.pid,
          floorid: this.comment.length + 1,
          infloor: false
        }
      })
    },
    commentfloor(floorid) {
      this.$router.push({
        path: '/comment',
        query: {
          pid: this.pid,
          floorid, 
          infloor: true
        }
      })
    }
  },
  created() {
    this.axios
      .get("/tiezi", {
        params: {
          pid: this.pid,
        },
      })
      .then((res) => {
        this.titledata = res.data.textdata[0];
        this.titleimgdata = res.data.imgdata;
      });
    this.axios
      .get("/floors", {
        params: {
          pid: this.pid,
        },
      })
      .then((res) => {
        this.comment = res.data.resdata;
      });
  },
  mounted() {
    this.$store.commit("changeTieziStatus", true);
  },
  beforeDestroy() {
    this.$store.commit("changeTieziStatus", false);
  },
};
</script>

<style type="text/css">
.tiezi {
  font-size: 1.6rem;
}

.tiezi .topbar {
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 5rem;
  box-shadow: 0 0.3rem 0.5rem #ccc;
  font-size: 1.6rem;
  display: flex;
  background-color: white;
}

.tiezi .topbar i {
  height: 5rem;
  line-height: 5rem;
  font-size: 3rem;
  width: 10%;
}

.tiezi .topbar .tiebatitle {
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  width: 80%;
}

.tieziHeader::-webkit-scrollbar {
  display: none;
}

.tiezi .tieziHeader {
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  border-bottom: 0.5rem rgb(234, 234, 234) solid;
  padding-bottom: 3rem;
}

.tiezi .userinfo {
  display: flex;
  margin-bottom: 1rem;
}

.userinfo .infotext {
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
}

.tiezi .userinfo img {
  width: 5rem;
  border-radius: 50%;
}

.tiezi .imglist img {
  max-width: 100%;
  vertical-align: middle;
}

.tieziMain {
  margin: 0 1rem;
}

.tieziMain .commentItem {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: 0.3rem solid rgb(234, 234, 234);
}

.el-image__inner {
  width: auto;
  height: auto;
  max-width: 100%;
}

.commentContent {
  margin-bottom: 0.5rem;
}

.pdata {
  margin-top: 0.2rem;
  color: rgb(214, 214, 214);
  font-size: 1.4rem;
}

.tiezifooter {
  font-size: 1.4rem;
  color: rgb(174, 174, 174);
  margin-bottom: 9rem;
}

.tiezifooter span {
  display: block;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.commentfloor {
  font-size: 1.4rem;
  color: rgb(174, 174, 174);
  display: flex;
}

.commentfloor .commentbtn {
  width: 100%;
  margin: 0 auto;
  text-align: end;
}

.commentfloor .seemorebtn {
  width: 25%;
  margin: 0 auto;
  text-align: start;
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