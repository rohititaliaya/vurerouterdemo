<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container">
             <div class="navbar-header">
                <a class="navbar-brand" href="#">WebSiteName</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                    <li><router-link to="/login">Login</router-link></li>
                    <li><router-link to="/register">Register</router-link></li>
                    <li><router-link to="/users">Users</router-link></li>

                </ul>
             </div>
        </nav>
        
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import SideBar from './Sidebar.vue'
export default {
    components:{
        SideBar
    }
}
</script>
