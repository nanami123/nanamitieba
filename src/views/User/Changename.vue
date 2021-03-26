<template>
  <div class="changename">
    <div class="headerz">
      <i class="el-icon-arrow-left" @click="backtoinfo"></i>
      <span>修改昵称</span>
      <span class="btn" @click="handleChangeName">保存</span>
    </div>
    <div class="inputcontianer">
      <el-input v-model="username" placeholder="请输入新昵称"></el-input>
      <el-button duration="500" :plain="true" @click="showmsg">成功</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    }
  },
  computed: {
    userid () {
      return this.$store.state.user.userid
    }
  },
  methods: {
    handleChangeName() {
      this.axios.post('/changename',{
        username: this.username,
        userid: this.userid
      }).then(res => {
        if (res.data.code === 200) {
          this.$store.commit('changeName',this.username)
          this.showmsg()
          this.backtoinfo()
        }
      })
    },
    backtoinfo() {
      this.$router.replace('/infosetting')
    },
    showmsg() {
      this.$message('修改成功')
    }
  }  
}
</script>

<style>
  .changename .headerz {
    height: 4rem;
    font-size: 2rem;
    box-shadow: 0 0.2rem 0.4rem #ccc;
    margin-bottom: 2rem;
    display: flex;
    line-height: 4rem;
  }
  .changename .headerz span {
    margin: 0 1.5rem;
    width: 50%;
  }
  .changename .headerz i {
    margin-left: 1rem;
    height: 4rem;
    line-height: 4rem;
  }
  .changename .headerz .btn {
    text-align: end;
  }
  .changename .el-button {
    display: none;
  }
</style>