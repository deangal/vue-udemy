<template>
<div>
    <h3>Filtered By User</h3>
    <input type="number" v-model.number="id">
    <keep-alive>

     <Posts :id="update"/>
</keep-alive>
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
        },
        computed: {
            update(){
                return this.id
            },
        },
        watch:{
            id: function(val){
                this.id = val
            }
        }
    }
</script>

<style scoped>
    input{
        margin-top:12px;
    }
</style>