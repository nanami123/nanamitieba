<template>
  <div class="infoSetting">
    <div class="headerz">
      <i class="el-icon-arrow-left" @click="backToUser"></i>
      <span>账号资料</span>
    </div>
    <div class="main">
      <div class="settingItem" @click="handleChangeAvatar">
        <span class="itemtatile">头像</span>
        <img :src="userinfo.avatar" />
      </div>
      <div class="settingItem" @click="handleChangeName">
        <span class="itemtatile">昵称</span>
        <span>{{ userinfo.username }}</span>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="settingItem" @click="handleChangeGender">
        <span class="itemtatile">性别</span>
        <span class="value">{{ userinfo.gender }}</span>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="settingItem" @click="handleChangeInfo">
        <span class="itemtatile">个性签名</span>
        <span class="introduction">{{ userinfo.introduction }}</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: this.$store.state.user,
      gender: ['男', '女']
    };
  },
  computed: {

  },
  created() {},
  beforeDestroy() {
    this.$store.commit("changeUser", this.userinfo);
  },
  methods: {
    backToUser() {
      this.$router.replace("/user");
    },
    // 修改头像
    handleChangeAvatar() {
      const upload = document.createElement("input");
      upload.type = "file";
      upload.accept = "image/png, image/jpeg";
      upload.onchange = this.setFile;
      upload.click();
    },
    //
    setFile(e) {
      const file = e.target.files[0];

      let formData = new FormData();
      formData.append("avatar", file);
      formData.append("userid", this.userinfo.userid);

      this.axios.post("/avatar", formData).then((res) => {
        if (res.data.code === 200) {
          this.userinfo.avatar = res.data.avatar;
        }
      });
    },

    // 修改昵称
    handleChangeName() {
      this.$router.push("/changename");
    },
    // 修改性别
    handleChangeGender() {
      this.$confirm("选择性别", {
        confirmButtonText: this.gender[0],
        cancelButtonText: this.gender[1],
        center: true,
      }).then(() => {
        if (this.gender[0] !== this.userinfo.gender) {
          this.axios.post('/changegender',{
            gender: this.gender[0],
            userid: this.userinfo.userid
          }).then(res => {
            console.log(res.data)
            if (res.data.code === 200) {
              this.userinfo.gender = this.gender[0]
              this.$store.commit('changeGender', this.gender[0])
            }
          })          
        }
      }).catch(() => {
        if (this.gender[1] !== this.userinfo.gender) {
          this.axios.post('/changegender',{
            gender: this.gender[1],
            userid: this.userinfo.userid
          }).then(res => {
            console.log(res.data)
            if (res.data.code === 200) {
              this.userinfo.gender = this.gender[1]
              this.$store.commit('changeGender', this.gender[1])
            }
          })          
        }        
      })
    },
    // 修改个性签名
    handleChangeInfo() {
      this.$prompt('修改个性签名',{
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.axios.post('/introduce',{
          introduction: value,
          userid: this.userinfo.userid
        }).then(res => {
          if (res.data.code === 200) {
              this.userinfo.introduction = value
              this.$store.commit('changeIntroduction', value)
          }
        })
      }).catch(() => {
        console.log('点击取消')
      })
    },
  },
};
</script>

<style>
.infoSetting {
  font-size: 2rem;
}

.infoSetting .headerz {
  width: 100%;
  display: flex;
  height: 4rem;
  line-height: 4rem;
  box-shadow: 0 0.3rem 0.5rem #ccc;
}

.infoSetting .headerz i {
  width: 5%;
  height: 4rem;
  line-height: 4rem;
}

.infoSetting .headerz span {
  width: 90%;
  text-align: center;
}

.infoSetting .main {
  margin: 2rem 0;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
}

.settingItem {
  display: flex;
  font-size: 1.6rem;
  width: 100%;
  height: 5rem;
  border-bottom: 0.1rem solid rgb(234, 234, 234);
}

.settingItem .itemtatile {
  width: 20%;
  text-align: start;
}

.settingItem span {
  height: 5rem;
  line-height: 5rem;
  text-align: end;
  width: 70%;
  align-items: flex-end;
}

.settingItem i {
  height: 5rem;
  line-height: 5rem;
}

.settingItem img {
  width: 5rem;
  border-radius: 50%;
  position: absolute;
  right: 1rem;
}

.introduction {
  overflow: hidden;
  text-overflow: ellipsis;
}

.el-message-box__wrapper {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 30rem;
  height: 10rem;
}

.el-message-box__wrapper div {
  width: 30rem;
}

.el-message-box > div {
  padding: 0;
}

.el-message-box .el-message-box__content {
  padding: 0;
  margin: 1rem 0;
}
</style>