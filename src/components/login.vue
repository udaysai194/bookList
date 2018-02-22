<template>
  <div class="container">
    <div id="login-box" class="z-depth-2">

      <div id="logo" style="text-align: center;padding: 20px;text-shadow: 1px #DFDEDD;"><h1>LOGIN</h1></div>

      <form class="col s12"  v-on:submit.prevent="onLogin()">
        <div class="row">
          <div class="col s10 input-field offset-s1">
            <i class="material-icons prefix">account_circle</i>
            <input type="text" id="username" v-model="username" required>
            <label for="username">username</label>
          </div>
        </div><!--username-->
        <div class="row">
          <div class="col s10 input-field offset-s1">
            <i class="material-icons prefix">vpn_key</i>
            <input type="password" id="password" v-model="password" required>
            <label for="password">password</label>
          </div>
        </div><!--password-->
        <div class="buttn">
          <input type="submit" name="button" class="btn waves-effect green black-text"></input>
          <router-link to="/signup">
            <button type="button" name="button" class="btn waves-effect teal black-text">signup</button>
          </router-link>
        </div>
      </form>

    </div>
    <p class="grey-text center">please watchout for the upper and lower cases of letters</p>
    <div style="height:50px">

    </div>
  </div>
</template>

<script>
import db from './firebaseInit.js'
  export default{
    name: 'login',
    data () {
      return {
        username: '',
        password: ''
      }
    },

    methods: {
      onLogin () {
        db.collection('users').doc(this.username).get().then(doc => {
          if(doc.exists){
            const pass = doc.data().password
            if(this.password == pass){
              this.$router.push({name:'Books-List', params:{username: this.username}})
            }else{
              alert('incorrect password')
            }
          }else{
            alert('username does not exist')
          }

        })
      }
    }
  }
</script>



<style scoped>
#login-box{
  margin: 16px auto 50px auto;
  width: 70%;
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
