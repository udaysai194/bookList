<template lang="html">
  <div class="container">
    <div class="z-depth-2 purple lighten-4" style="text-align:center;padding:5%;margin-top:10px;">
      <p style="text-transform:uppercase; font-weight:600; color:green;">master's love detected : Ravali</p>
      <img src="../assets/personalAssist.png" alt="personal assistant" width="20%">
      <h5>Hi Ravali !</h5>
      <p class="black-text">i'm zara, uday's personal assistant</p>


      <p class="black-text">
        my master invented me to propose his love by me.
        as far as i know, my master is soo soo sweet,
        he is soo humble and gentle, he loves you very much more than i can express.
        he always loves you and loves only you. he always find new ways so that you wont be bore and make sure that you will be happy every minuite,
        he always dreamt for you, think for, make plans for you, i'm pretty sure that he will fight against the whole world as far as your support is with
        him. he always wanted to share his life with you from the moment he met love.
      </p>
      <p class="black-text">
        he loves you as a mother, cares you as a father, supports you as a brother, advice you as a sister, he will beside you always as a good friend,
        may be a little naughty and mad friend. trust me ravali, he will be the perfect partner for you.
      </p>
      <p class="black-text">
        please accept the proposal please please... no one are as sweet as my master, trust me.
      </p>
      <p class="black-text">so do you accept?, i will keep the answer secret from my master.</p>




      <div v-if="this.answer == 'empty'">
        <button type="button" name="yes" class="btn waves-effect green black-text" v-on:click="yes()">yes</button>
        <button type="button" name="no" class="btn waves-effect red black-text" v-on:click="no()">no</button>
      </div>
      <div class="answer green-text" v-if="this.answer == 'yes'">
        <h5>thank you sooooo much..... <i class="material-icons small">sentiment_very_satisfied</i></h5>
        <div style="padding-top:10px;">
          <router-link :to="{ name: 'Books-List', params: {username:this.$route.params.username} }">
            <button type="button" name="button" class="btn waves-effect teal black-text">login</button>
          </router-link>
        </div>
      </div>
      <div class="answer red-text" v-if="this.answer == 'no'">
        <h5>i am so sad for uday.....<i class="material-icons small">sentiment_very_dissatisfied</i></h5>
        <div style="padding-top:10px;">
          <router-link :to="{ name: 'Books-List', params: {username:this.$route.params.username} }">
            <button type="button" name="button" class="btn waves-effect teal black-text">login</button>
          </router-link>
        </div>
      </div>
    </div>
    <div style="height:50px">

    </div>
  </div>

</template>

<script>
import db from './firebaseInit.js'
export default {
  name: 'ravali',
  data () {
    return {
      answer: 'empty'
    }
  },
  methods: {
    yes(){
      this.answer = 'yes';
      db.collection('users').doc('answer').set({
        answer : this.answer
      })
      //this.$router.push({name:'Books-List', params:{username: this.$route.params.username}})
    },
    no(){
      this.answer = 'no';
      db.collection('users').doc('answer').set({
        answer : this.answer
      })
      //this.$router.push({name:'Books-List', params:{username: this.$route.params.username}})
    }
  }
}
</script>

<style lang="css">
</style>
