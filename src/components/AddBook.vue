<template lang="html">
  <div>
    <div class="container">
      <h1></h1>
      <form class="col s12">
        <div class="row">
          <div class="col s12 input-field">
            <input type="text" name="inputBook">
            <label for="inputBook">book title</label>
          </div>
        </div><!--inputBook-->
        <div class="row">
          <div class="col s12 input-field">
            <input type="text" name="inputDate">
            <label for="inputDate">dd/mm/yyy</label>
          </div>
        </div><!--inputDate-->
        <input type="submit" class="btn teal">
      </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Add-Book',
  data () {
    return {

    }
  }

}
</script>

<style lang="css">
</style>
