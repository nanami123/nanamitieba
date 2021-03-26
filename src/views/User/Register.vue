<template>
  <div>
    <div class="header">
      <span>注册</span>
    </div>
    <div class="loginTextarea">
      <p>登录账号 精彩相随</p>
      <el-input v-model="username" placeholder="请输入用户名"></el-input>
      <el-input
        v-model="password"
        placeholder="请输入密码"
        show-password
      ></el-input>
      <div class="buttons">
        <el-button @click="goLogin" class="btn" type="primary" round>返回登录</el-button>
        <el-button @click="register" class="btn" type="primary" round>点击注册</el-button>
        <el-button class="msgbtn" :plain="true" @click="open"></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    goLogin() {
      this.$router.replace("/user");
    },
    register() {
      this.axios.post('/register',{
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data.code === 200) {
          this.$store.commit('changeUser',res.data.userinfo);
          this.$store.commit('changeStatus')
          this.$router.replace('/user')
        } else {
          this.open()
        }
      })
    },
    open() {
      this.$message({
        message: '用户名已存在'
      })
    }
  },
  created() {
    
  },
};
</script>

<style>
.header {
  font-size: 2rem;
  position: fixed;
  width: 100%;
  height: 4rem;
  top: 0;
  box-shadow: 0 0.1rem 0.3rem #ccc;
  text-align: center;
  line-height: 4rem;
}
.loginTextarea {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
  height: 60%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.loginTextarea p {
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 5rem;
}
.loginTextarea input {
  width: 100%;
  height: 4rem;
  margin: 1rem 0;
  border-radius: 4rem;
  background-color: rgb(245, 245, 245);
  font-size: 1.5rem;
}

.buttons {
  display: flex;
}

.buttons .btn {
  align-items: center;
  width: 50%;
}
.msgbtn {
  display: none;
}
</style>