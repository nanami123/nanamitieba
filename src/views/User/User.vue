<template>
  <div>
    <div class="user" v-if="this.$store.state.isLogin">
      <user-header :puserinfo="userinfo" />
      <user-nav />
      <user-main />
    </div>
    <div v-else>
      <div class="header">
        <span>登录</span>
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
          <el-button @click="goRegister" class="btn" type="primary" round
            >前往注册</el-button
          >
          <el-button @click="login" class="btn" type="primary" round
            >点击登录</el-button
          >
          <el-button
            class="msgbtn"
            :plain="true"
            @click="showtoastmsg"
          ></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserHeader from "../../components/User/UserHeader.vue";
import UserNav from "../../components/User/UserNav.vue";
import UserMain from "../../components/User/UserMain.vue";
export default {
  name: 'user',
  data() {
    return {
      username: "",
      password: "",
    };
  },
  components: {
    UserHeader,
    UserNav,
    UserMain,
  },
  computed: {
    userinfo() {
      return this.$store.state.user
    }
  },
  methods: {
    // 路由跳转到register
    goRegister() {
      this.$router.replace("/register");
    },
    // 登录处理
    login() {
      this.axios
        .post("/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          if (res.data.code === 200) {
            this.$store.commit("changeStatus");
            this.$store.commit('changeUser',res.data.userinfo);
          } else {
            this.showtoastmsg();
          }
        });
    },
    // 提示信息
    showtoastmsg() {
      this.$message({
        message: "用户名或密码错误",
      });
    },
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