<template>
  <div id="app">

<recipes v-bind:recipes="recipes"></recipes>

    <recipes v-bind:recipes="recipes"></recipes>
    <recipes v-bind:recipes="recipes"></recipes>
  </div>
</template>

<script>
import recipes from './components/recipes';

export default {
  name: 'app',
  components: {
    recipes
  },
  data(){
    return{
     recipes:[
       {
         id:1,
         title:"chips masala",
         content:"slice"

       },
       {
         id:2,
         title:"chapati",
         content:"slice"

       },
     ]
    }
  }
}
</script>

<style>

</style>
