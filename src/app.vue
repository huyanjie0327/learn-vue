<template>
    <div>
        <h1>{{msg}}</h1>
        <img src="./assets/test.png"></img>
        <p>
            <router-link to="/hello">hello</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "这是个测试图片",
        }
    }
}
</script>
