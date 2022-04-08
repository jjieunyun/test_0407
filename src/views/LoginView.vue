<template>
  <div class="about">
    <h1>로그인을 해주세요</h1>
    <div>
        <label for="" class="idInput">아이디</label> <input type="text" v-model="user"> <br>
        <label for="">패스워드</label> <input type="password"> <br>
      <button ref="focus" @click="userLogin">확인</button>
      <button @click="$router.push('/')">취소</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data () {
    return {
      user : '',
    }
  },
  methods : {
    userLogin () {
      this.$emit('login-user', this.user);
      this.$router.push('/');
    }
  },
  created () {
        
        this.$refs.focus.onFocus();
    },
}
</script>


<style scoped>
.idInput {
  padding-left: 15px;
}

.about {
  border: 1px solid salmon;
  border-radius: 10px;
      width: 500px;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%,-50%);
        
        }
</style>