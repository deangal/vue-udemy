<template>
<div>
    <form action="">

    <input type="number"  v-model.number="id">.
     <Posts v-bind:id="id"/>

    </form>
    </div>
    
</template>

<script>
import Posts from "./Posts.vue"
    export default {
        components:{
            Posts
        },

        data(){
            return {
              id : 1
            } 
        }
    }
</script>

<style scoped>
    input{
        margin-top: 50px;
    }
</style>