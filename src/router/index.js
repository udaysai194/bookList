import Vue from 'vue'
import Router from 'vue-router'
import AddBook from '@/components/AddBook'
import BooksList from '@/components/BooksList'
import Login from '@/components/login'
import Signup from '@/components/signup'
import BookView from '@/components/bookView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/addBook',
      name: 'Add-Book',
      component: AddBook
    },
    {
      path: '/bookslist',
      name: 'Books-List',
      component: BooksList
    },
    {
      path: '/bookView/:book_id',
      name: 'Book-View',
      component: BookView
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ]
})
