<template>
  <div class="home">
    <h1>게시글 목록입니다</h1>
        <a v-for="num in number" :key="num">
            <router-link class="list" :to="`/${num}`">{{num}}</router-link>  | 
        </a>

      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      number : 3,
    }
  }
}
</script>

<style scoped>
  .list {
    color:darkblue;
    text-decoration-line: none;
    font-size: 20px;
  }

  .list:hover {
    color: red;
  }
</style>