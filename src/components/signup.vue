<template>
  <div class="container">
    <div id="login-box" class="z-depth-2">

      <div id="logo" style="text-align: center;padding: 20px;text-shadow: 1px #DFDEDD;"><h1>SIGNUP</h1></div>

      <form class="col s12" id="myForm" v-on:submit.prevent="check()">
        <div class="row">
          <div class="col s10 input-field offset-s1">
            <i class="material-icons prefix">account_circle</i>
            <input type="text" id="username" v-model="username" required>
            <label for="username">username</label>
          </div>
        </div><!--username-->
          <div class="row">
            <div class="col s10 input-field offset-s1">
              <i class="material-icons prefix">edit</i>
              <input type="text" id="name" v-model="name">
              <label for="name">name</label>
            </div>
          </div><!--name-->
            <div class="row">
              <div class="col s10 input-field offset-s1">
                <i class="material-icons prefix">edit</i>
                <input type="text" style="text-transform: uppercase" v-model="rollno" id="rollno" required>
                <label for="rollno">rollno</label>
              </div>
            </div><!--rollno-->
        <div class="row">
          <div class="col s10 input-field offset-s1">
            <i class="material-icons prefix">vpn_key</i>
            <input type="password" id="password" v-model="password" required>
            <label for="password">password</label>
          </div>
        </div><!--password-->
        <div class="buttn">
            <input type="submit" name="button" class="btn waves-effect green black-text"></input>
        </div>
      </form>
    </div>
    <div style="height:50px">

    </div>
  </div>
</template>

<script>
import db from './firebaseInit.js'
  export default{
    name: 'signup',
    data () {
      return {
        username:'',
        name: '',
        rollno: '',
        password: ''
      }
    },
    methods:{
      check (e) {

        db.collection('users').doc(this.username).set({
          password: this.password,
          name: this.name,
          rollno: this.rollno
          })
          if(this.username.includes('Ravali') || this.name.includes('Ravali') || this.username.includes('ravali') || this.name.includes('ravali')){
            this.$router.push({ name: 'ravali', params: {username: this.username} })
          }else {
            this.$router.push({ name: 'Books-List', params: {username: this.username} })
          }

      }
  }
}
</script>









<style scoped>
#logo{

}

#login-box{
  width: 70%;
  margin: 16px auto 50px auto;
  border-radius: 7px;
}

.buttn{
  padding: 0px 20px 20px 20px;
  text-align: center;
}

@media only screen and (max-width:480px) {
  #login-box {
    width: 100%;

  }
  #logo{
    padding: 10px;
  }
}
</style>
