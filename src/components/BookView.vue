<template lang="html">
  <div>
    <div class="container">
      <h1></h1>
      <form class="col s12">
        <div class="row">
          <label for="book" style="margin: 0px 0px 0px 11px;">book name</label>
          <div class="col s12 input-field" style="margin:0px">
            <input type="text" id="book" placeholder="bookName" v-model="bookName">
          </div>
        </div><!--inputBook-->
        <div class="row">
          <label for="book" style="margin: 0px 0px 0px 11px;">author</label>
          <div class="col s12 input-field" style="margin:0px">
            <input type="text" id="author" placeholder="author" v-model="author">
          </div>
        </div><!--inputAuthor-->
        <div class="row">
          <label for="book" style="margin: 0px 0px 0px 11px;">submit date</label>
          <div class="col s12 input-field" style="margin:0px">
            <input type="text" id="date" placeholder="submitDate" v-model="submitDate">
          </div>
        </div><!--inputDate-->
        <input type="submit" class="btn waves-effect teal" value="save" @click="updateBook()">
        <input type="button" class="btn waves-effect red" value="delele" @click="deleteBook()">
      </form>
      </div>
  </div>
</template>

<script>
import db from './firebaseInit.js'
export default {
  name: 'Book-View',
  data () {
    return {
      bookName: '',
      submitDate: '',
      author: ''
    }
  },
  created () {
    db.collection('users').doc(this.$route.params.book_id).get().then((doc) => {
      this.bookName = doc.data().bookName
      this.submitDate = doc.data().submitDate
      this.author = doc.data().author
    }).catch((err) => {
      console.log(err);
    })
  },

  methods:{
    deleteBook () {
      db.collection('users').doc(this.$route.params.book_id).delete().then(docRef => {
        this.$router.push('/BooksList')
      }).catch(error => console.log(err))
    },
    updateBook () {
      db.collection('users').doc(this.$route.params.book_id).update({
        bookName: this.bookName,
        author: this.author,
        submitDate: this.submitDate
      }).then(doc => {
        this.$router.push('/bookslist')
      }).catch(error => console.log(err))
    }
    }
  }

</script>

<style lang="css">
</style>
