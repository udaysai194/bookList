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
          <input type="submit" name="btn" class="btn waves-effect teal">
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
  width: 70%;
  margin: 10px auto;
  border-radius: 7px;
}

.buttn{
  padding: 0px 20px 20px 20px;
  text-align: center;
}

@media only screen and (max-width:700px) {
  #login-box {
    width: 100%;

  }
}
</style>
