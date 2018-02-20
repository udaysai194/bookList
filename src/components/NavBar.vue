<template lang="html">
  <nav>
    <div class="nav-wrapper orange darken-2">
      <a href="#" class="brand-logo center truncate">BOOKS LIST</a>
      <div class="container">
        <router-link :to="{ name: 'login' }" class="link right" id="login">login</router-link>
        <router-link :to="{ name: 'signup' }" class="link right">signup</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {

    }
  }
}
</script>

<style lang="css">
  .link {
    margin: 0px 0px 0px 10px;
    text-transform: uppercase;
    font-weight: 600;
    color: #FFECD8;
  }
  .link:hover{
    color: #8CFADD;
  }

  @media only screen and (max-width:480px) {
    .link{
      width: 0px;
      font-size: 12px;
      display: none;
    }
    #login{
      margin-right: 35px;
      display: inline-block;
    }
  }

</style>
