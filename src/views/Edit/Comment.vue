<template>
  <div class="comment">
    <div class="headerz">
      <p class="el-icon-back" @click="backtotiezi"></p>
      <p class="headertitle">回复帖子</p>
      <p class="headerbtn" @click="handlefabu">发布></p>
    </div>
    <el-input v-focus type="textarea" :autosize="{ minRows: 2}" placeholder="请输入内容" v-model="textarea1"></el-input>
    <div class="imageContainer">
      <div class="imageItem" v-for="(item, index) in imglist" :key="index">
        <img :src="item.imgurl">
        <i class="iconfont icon-cuowu1" @click="deleteimg(index)"></i>
      </div>
      <div v-if="commentinfo.infloor === 'true'" class="imageItem" @click="handleAddImage"></div>
      <div v-else class="imageItem" @click="handleAddImage">
        <img src="http://120.26.184.194:3000/img/resetbcg/upload_normal.png">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // userid: 1,
      textarea1: "",
      commentinfo: this.$route.query,
      test: false,
      imglist: [],
      imgfiles: [],
      pdata: new FormData
    };
  },
  methods: {
    handleAddImage() {
      const upload = document.createElement('input')
      upload.type = 'file'
      upload.accept = 'image/png, image/jpeg'
      upload.onchange = this.setFile
      upload.click()
    },
    setFile(e) {
      this.imgfiles.push(e.target.files[0])
      let reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (e) => {
        this.imglist.push({imgurl: e.target.result})
        // console.log(e)
      }
    },
    backtotiezi() {
      this.$router.replace({
        path: '/tiezi',
        query: {
          id: this.commentinfo.pid
        }
      })
    },
    handlefabu() {
      this.pdata.append('userid', this.$store.state.user.userid)
      this.pdata.append('title', this.textarea1)
      this.pdata.append('floorid', this.commentinfo.floorid)
      this.pdata.append('infloor', this.commentinfo.infloor)
      this.pdata.append('pid', this.commentinfo.pid)
      for (let imgfile of this.imgfiles) {
        this.pdata.append('file',imgfile)
      }
      this.axios.post('/comment', this.pdata).then(res => {
        this.$router.replace({
          path: '/tiezi',
          query: {
            id: this.commentinfo.pid
          }
        })
      })
    },
    deleteimg(index) {
      this.imgfiles.splice(index,1)
      this.imglist.splice(index,1)
    }
  },
};
</script>

<style>
.comment .headerz {
  border-bottom: 0.1rem solid #ccc;
  display: flex;
}

.comment .headerz p,h2 {
  align-items: center;
  font-weight: bold;
  font-size: 1.8rem;
}

.headertitle {
  width: 70%;
  text-align: center;
}

.el-icon-back {
  width: 15%;
  text-align:center
}

.headerbtn {
  width: 15%;
  text-align: end;
}

textarea {
  margin-top: 1rem;
  width: 100%;
  border: 0.1rem solid white;
}

.imageContainer {
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
}

.imageItem {
  position: relative;
  margin: 0.5rem;
}

.imageItem img {
  width: 10rem;
  border-radius: 0;
}

.imageItem .iconfont {
  font-size: 1.6rem;
  position: absolute;
  top: 0;
  right: 0;
}

</style>