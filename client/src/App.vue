<template>
    <div id="app">
        <router-view></router-view>
        <van-tabbar v-model="active">
            <van-tabbar-item
                replace
                to="/"
                icon="home-o"
            >
                首页
            </van-tabbar-item>
            <van-tabbar-item
                replace
                to="/add"
                icon="plus"
            >
                发布
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
    data() {
        return {
            active: 0
        };
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
