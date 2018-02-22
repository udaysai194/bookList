<template lang="html">
  <div>
    <div class="container">
      <h1></h1>
      <form class="col s12">
        <div class="row">
          <div class="col s12 input-field">
            <input type="text" id="book" v-model="bookName">
            <label for="book">book title</label>
          </div>
        </div><!--inputBook-->
        <div class="row">
          <div class="col s12 input-field">
            <input type="text" id="author" v-model="author">
            <label for="author">author</label>
          </div>
        </div><!--inputAuthor-->
        <div class="row">
          <div class="col s12 input-field">
            <input type="text" id="date" v-model="submitDate">
            <label for="date">dd/mm/yyyy</label>
          </div>
        </div><!--inputDate-->
        <router-link :to="{ name: 'Books-List', params: {} }">
          <button type="submit" name="button" class="btn waves-effect green black-text" v-on:click="addBook()">add</button>
        </router-link>
        <router-link :to="{ name: 'Books-List', params: {} }">
          <button type="submit" name="button" class="btn waves-effect grey black-text">cancel</button>
        </router-link>
      </form>
      </div>
      <div style="height:50px">

      </div>
  </div>
</template>

<script>
import db from './firebaseInit.js'
export default {
  name: 'Add-Book',
  data () {
    return {
      bookName: '',
      submitDate: '',
      author: '',
      username: ''
    }
  },

  created () {
    var path = this.$route.fullPath
    var arr = path.split('/');
    this.username = arr[arr.length-2]

  },

  methods:{
    addBook () {
      db.collection('users').doc(this.username).collection('booksList').add({
        bookName: this.bookName,
        submitDate: this.submitDate,
        author: this.author
      }).catch(error => console.log(error))
    }
    }
  }

</script>

<style lang="css">
</style>
