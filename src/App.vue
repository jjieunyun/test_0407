<template>
  <div id="app">
    <div v-if="login">
      <button @click="$router.push('/')">글목록</button>
      <button @click="$router.push(`/user/${user}`)">{{user}}님의 정보</button>
      <button @click="logOut">Logout</button>
    </div>
      <button v-else @click="$router.push('/login/login')">Login</button>
    
    <router-view @login-user="showLogin" />
  </div>
  
</template>

<script>
export default {
  name : 'app',
  data () {
    return {
      user : '',
      login: false,
    }
  },
  methods : {
    showLogin (user) {
      this.user = user;
      this.login = true;
    },
    logOut () {
      this.user = '';
      this.login = false;
      this.$router.push('/');
    }
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button {
  border: salmon solid 1px;
  border-radius: 10px;
  margin-right: 10px;
  background-color: transparent;
  padding:5px;
  margin-top: 10px;
  margin-bottom: 10px;
}

button > span {
  color: blue;
  font-size: 20px;
}
</style>
