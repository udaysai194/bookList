<template lang="html">
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

    <div class="box z-depth-1" v-for="item in list">
      <div class="book left truncate">
        {{item.bookName}}
      </div>
      <div class="date right">
        {{item.submitDate}}
      </div>
      <div class="clearfix"></div>
    </div>

  </div><!--container ends-->
</template>

<script>
export default {
  name: 'Books-List',
  data () {
    return {
      list:[
        {
          bookName: 'c language',
          submitDate: '15/02/2018'
        },
        {
          bookName: 'head first java',
          submitDate: '18/02/2018'
        },
        {
          bookName: 'herbert schildt',
          submitDate: '25/02/2018'
        },
        {
          bookName: 'data base management system',
          submitDate: '28/02/2018'
        }
      ]
    }
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
  width: 80%;
}

#dateLabel {
  text-align: center;
  width: 20%;
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




@media only screen and (max-width: 600px) {

}
</style>
