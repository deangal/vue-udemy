<template>
       <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">userId</th>
      <th scope="col">title</th>
      <th scope="col">completed</th>
    </tr>
  </thead>
  <tbody>
   <tr scope="row" v-for="post in posts" v-bind:key="post.id">{{post.id}}

        <th scope="row">{{post.userId}}</th>
        <th scope="row">{{post.title}}</th>
        <th scope="row">{{post.completed}}</th>
   </tr>
 
   
  </tbody>
</table>
</template>

<script>
import axios from 'axios'

    export default {
        name:'Posts',
    data(){
        return {    
              posts: [
           
            ],
        }
    },
    props:['id'],

    // created = componentDidMount
    created(){
        console.log('Connected');
        if(this.id){
            axios.get(`https://jsonplaceholder.typicode.com/todos`).then(posts =>{
            this.posts = posts.data.filter(item => item.userId == this.id)

        })
        } else{
          axios.get(`https://jsonplaceholder.typicode.com/todos/`).then(posts =>{
              this.posts = posts.data
          })
        }
    },

   
  }
</script>

<style scoped>

</style>