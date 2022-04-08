<template>
    <div class="page">
        <h3>{{$route.params.page}}페이지 입니다</h3>
        <div class="box">
            <p>{{data.board[($route.params.page)-1].memo}}</p>
        </div>
        
    </div>
</template>

<script>
import data from '../assets/data.json'

export default {
    name : 'pageComponent',
    data () {
        return {
            data : data,
        }
    }
}
</script>

<style scoped>
    .box {
        border: 1px salmon solid;
        width: 500px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 30px;
    }
</style>