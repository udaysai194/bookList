import Vue from 'vue'
import Router from 'vue-router'
import AddBook from '@/components/AddBook'
import BooksList from '@/components/BooksList'
import Login from '@/components/login'
import Signup from '@/components/signup'
import BookView from '@/components/bookView'
import ravali from '@/components/ravali'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bookslist/:username/addBook',
      name: 'Add-Book',
      component: AddBook
    },
    {
      path: '/bookslist/:username',
      name: 'Books-List',
      component: BooksList
    },
    {
      path: '/bookslist/:username/:book_id',
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
    },
    {
      path: '/ravali/:username',
      name: 'ravali',
      component: ravali
    }
  ]
})
