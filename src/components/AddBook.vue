<template lang="html">
  <div>
    <div class="container">
      <h1></h1>
      <form class="col s12" v-on:submit.prevent="addBook()">
        <div class="row">
          <div class="col s12 input-field">
            <input type="text" name="book" v-model="bookName">
            <label for="book">book title</label>
          </div>
        </div><!--inputBook-->
        <div class="row">
          <div class="col s12 input-field">
            <input type="text" name="author" v-model="author">
            <label for="author">author</label>
          </div>
        </div><!--inputAuthor-->
        <div class="row">
          <div class="col s12 input-field">
            <input type="text" name="date" v-model="submitDate">
            <label for="date">dd/mm/yyy</label>
          </div>
        </div><!--inputDate-->
        <input type="submit" class="btn teal">
      </form>
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
      author: ''
    }
  },
  methods:{
    addBook () {
      db.collection('users').add({
        bookName: this.bookName,
        submitDate: this.submitDate,
        author: this.author
      }).then(docRef => {
        this.$router.push('/BooksList')
      }).catch(error => console.log(err))
    }
    }
  }

</script>

<style lang="css">
</style>
