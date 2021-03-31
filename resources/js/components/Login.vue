<template>
    <div>
        <form  method="post" @submit.prevent="onCheck()">
           <h1>Login</h1>
               <li class="msg"> {{this.error1}} </li>
               <li class="msg"> {{this.error2}}</li>
            <table>
                <tr>
                    <td>Username:</td>
                    <td><input type="text" v-model="name" placeholder="Enter Email"></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="password" v-model="pass" placeholder="Enter Password" ></td>
                </tr>
                <tr>
                    <td> <input type="submit" value="Login"></td>
                    <td></td>
                </tr>
            </table>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
        name:'',
        pass:'',
        error1:'',
        error2:''
    }
    },
    methods:{
        onCheck:function(){
            if(this.name==''){
                this.error1="name required";
            }else if (!this.validEmail(this.name)) {
                this.error1='Valid email required.';
            }else if(this.pass==''){
                this.error2="password required";
                this.error1="";
            }else{
                this.error2="";
            }
        },
        validEmail:function(email){
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>
<style scoped>
.msg{
    color: tomato;
}
</style>