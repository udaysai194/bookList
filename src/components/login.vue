<template>
  <div class="container">
    <div id="login-box" class="z-depth-2">

      <div id="logo" style="text-align: center;padding: 20px;text-shadow: 1px #DFDEDD;"><h1>LOGIN</h1></div>

      <form class="col s12">
        <div class="row">
          <div class="col s10 input-field offset-s1">
            <i class="material-icons prefix">account_circle</i>
            <input type="text" id="username" name="username">
            <label for="username">username</label>
          </div>
        </div><!--username-->
        <div class="row">
          <div class="col s10 input-field offset-s1">
            <i class="material-icons prefix">vpn_key</i>
            <input type="password" id="password" name="password">
            <label for="password">password</label>
          </div>
        </div><!--password-->
        <div class="buttn">
          <router-link to="/bookslist">
          <input type="submit" name="login" value="LOGIN" class="btn waves-effect teal">
          </router-link>
          <router-link to="/signup" class="btn waves-effect teal">
            signup
          </router-link>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
  export default{
    name: 'login',
    data () {
      return {
        msg:'login bar'
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
