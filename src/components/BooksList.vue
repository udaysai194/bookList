<template lang="html">
  <div>
  <div class="container">

      <div id="boxHeader">
        <div id="bookLabel" class="left">
          book title
        </div>
        <div id="dateLabel" class="right">
          submit date
        </div>
        <div class="clearfix"></div>
      </div>

      <div  v-for="item in list" v-bind:key="item.id">
        <router-link class="black-text" v-bind:to="{ name: 'Book-View', params: {book_id: item.book_id} }">
          <div class="box z-depth-1" style="cursor: pointer;">
                <div class="left truncate">
                  {{item.bookName}}
                </div>
                <div class="right">
                  {{item.submitDate}}
                </div>
                <div class="clearfix"></div>
          </div>
        </router-link>
      </div>


    <p>To add a new book, please click the below floating button with add sign</p>
  </div><!--container ends-->
  <div class="fixed-action-btn">
    <router-link :to="{ name: 'Add-Book' }" class="btn-floating btn-large orange darken-2">
      <i class="large material-icons">add</i>
    </router-link>
  </div>

</div>
</template>

<script>
import db from './firebaseInit.js'
export default {
  name: 'Books-List',
  data () {
    return {
      list:[]
    }
  },

created () {
  var path = this.$route.fullPath
  var arr = path.split('/');
  var username = arr[arr.length-1]


  var user = db.collection('users').doc(username);
  var userDocs = user.get()
      .then(doc => {
          if (!doc.exists) {
              console.log('No such document!');
          } else {
              user.collection('booksList').orderBy('submitDate').get()
              .then((snapshot) => {
                  snapshot.forEach((doc) => {
                      const book = {
                        book_id: doc.id,
                        bookName: doc.data().bookName,
                        submitDate: doc.data().submitDate
                      }
                      this.list.push(book)
                  });
              })
              .catch((err) => {
                  console.log('Error getting documents', err);
              });
          }
      })
      .catch(err => {
          console.log('Error getting document', err);
      });
    }
}
</script>














<style lang="css">
#boxHeader{
  font-weight: bold;
  color: #e65100;
  padding: 10px 13px;
}

#bookLabel {
  width: 50%;
}

#dateLabel {
  text-align: right;
  width: 50%;
}

.box {
  padding: 13px;
  border-radius: 5px;
}

.box:hover {
  border: 1px solid #e65100;
}

.book {
  width: 80%;
}

.date {
  text-align: center;
  width: 20%;
}

p{
    color: grey;
    opacity: 0.7;
    margin: 20px;
    text-align: center;
}


@media only screen and (max-width: 480px) {

}
</style>
