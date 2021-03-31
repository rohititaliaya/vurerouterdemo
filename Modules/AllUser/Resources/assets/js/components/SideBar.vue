<template>
    <div>
        <div class="sidenav">
            <router-link to="/allmans">All Users</router-link>
            <router-link to="/customers">Customers</router-link>
            <router-link to="/vendors">Vendors</router-link>
            <router-link to="/userrole">User Roel</router-link>
        </div>
    
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>