<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="nav-container">
            


            <router-link :to="option.path" custom v-slot="{ navigate }" v-for="option in options" v-bind:key="option.id">
                <span @click="navigate" role="link">{{option.title}}</span>
            </router-link>

        </div>
</nav>
</template>

<script>
    export default {
          name:'Navbar',
          data(){
        return {    
              options: [
            {id: 1 ,title: 'Posts' ,body:'lorem ipsum',path:'/'},
            {id: 2 ,title: 'Filtered' ,body:'loremloremlorem ipsum',path:'/filtered'},
            {id: 3 ,title: 'Login' ,body:'loremlorem loremlorem',path:'/login'},
            ]
        }
    }  
    }
</script>

<style scoped>
    nav{
        display: flex;
        align-items: center;
        justify-content: center;
}   

span{
    padding: 50px;
}
</style>