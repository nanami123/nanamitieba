<template>
  <div class="edit">
    <div class="headerz">
      <h2 class="headeritem">发布帖子</h2>
      <p class="headeritem" @click="handlefatie">发布></p>
    </div>
    <el-input v-focus type="textarea" :autosize="{ minRows: 2}" placeholder="请输入内容" v-model="textarea1"></el-input>
    <div class="imageContainer">
      <div class="imageItem" v-for="(item, index) in imglist" :key="index">
        <img :src="item.imgurl">
        <i class="iconfont icon-cuowu1" @click="deleteimg(index)"></i>
      </div>
      <div class="imageItem" @click="handleAddImage">
        <img src="http://120.26.184.194:3000/img/resetbcg/upload_normal.png">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      textarea1: "",
      imglist: [],
      pdata: new FormData,
      imgfiles: [],
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
    handlefatie() {
      this.pdata.append('userid', this.$store.state.user.userid)
      this.pdata.append('title', this.textarea1)
      for (let imgfile of this.imgfiles) {
        this.pdata.append('file',imgfile)
      }
      this.axios.post('/fatie', this.pdata).then(res => {
        console.log(res)
        Object.assign(this.$data, this.$options.data())
      }).catch(err => {
        Object.assign(this.$data, this.$options.data())        
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
.edit .headerz {
  border-bottom: 0.1rem solid #ccc;
  display: flex;
}

.edit .headerz .headeritem {
  align-items: center;
  width: 50%;
  font-weight: bold;
}

p {
  text-align: right;
  font-size: 1.5rem;
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