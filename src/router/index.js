import Vue from 'vue'
import Router from 'vue-router'
import AddBook from '@/components/AddBook'
import BooksList from '@/components/BooksList'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Add-Book',
      component: AddBook
    },
    {
      path: '/bookslist',
      name: 'Books-List',
      component: BooksList
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
