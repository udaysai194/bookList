<template>
  <div class="container">
    <div id="login-box" class="z-depth-2">

      <div id="logo" style="text-align: center;padding: 20px;text-shadow: 1px #DFDEDD;"><h1>SIGNUP</h1></div>

      <form class="col s12">
        <div class="row">
          <div class="col s10 input-field offset-s1">
            <i class="material-icons prefix">account_circle</i>
            <input type="text" id="username" name="username" v-model="name">
            <label for="username">username</label>
          </div>
        </div><!--username-->
          <div class="row">
            <div class="col s10 input-field offset-s1">
              <i class="material-icons prefix">edit</i>
              <input type="text" id="name" name="name">
              <label for="name">name</label>
            </div>
          </div><!--name-->
            <div class="row">
              <div class="col s10 input-field offset-s1">
                <i class="material-icons prefix">edit</i>
                <input type="text" name="rollno" id="rollno">
                <label for="rollno">rollno</label>
              </div>
            </div><!--rollno-->
        <div class="row">
          <div class="col s10 input-field offset-s1">
            <i class="material-icons prefix">vpn_key</i>
            <input type="password" id="password" name="password">
            <label for="password">password</label>
          </div>
        </div><!--password-->
        <div class="buttn">
          <router-link to="/bookslist">
            <input type="submit" name="btn" class="btn waves-effect teal">
          </router-link>
        </div>
      </form>
      <button type="button" name="button" @click="check">button</button>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'signup',
    data () {
      return {
        msg:'login bar',
        name: ''
      }
    },
    methods:{
      check: function() {
        console.log(document.getElementById('name').value)
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
