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

    <div class="box z-depth-1" style="cursor: pointer;" v-for="item in list" v-bind:key="item.id">
      <router-link class="black-text" v-bind:to="{ name: 'Book-View', params: {book_id: item.book_id} }">
              <div class="left truncate">
                {{item.bookName}}
              </div>
              <div class="right">
                {{item.submitDate}}
              </div>
              <div class="clearfix"></div>
      </router-link>
      </div>


    <p>To add a new book, please click the below floating button with add sign</p>
  </div><!--container ends-->
  <div class="fixed-action-btn">
    <router-link to="/addBook" class="btn-floating btn-large orange darken-2">
      <i class="large material-icons">add</i>
    </router-link>
    <ul>
      <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
      <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
      <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
      <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
    </ul>
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
  db.collection('users').orderBy('submitDate').get()
    .then((querySnapshot) => {
        querySnapshot.forEach(doc => {
          const data = {
            'book_id': doc.id,
            'bookName': doc.data().bookName,
            'submitDate': doc.data().submitDate
          }
          this.list.push(data)
        }
      );
    })
    .catch((err) => {
        console.log('Error getting documents', err);
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
