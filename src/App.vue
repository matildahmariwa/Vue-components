<template>
  <div id="app" :style="{ fontSize: postFontSize + 'em' }">
    <heading></heading>
<recipes v-bind:recipes="recipes"></recipes>


  </div>
</template>

<script>
import recipes from './components/recipes';
import heading from './components/heading'


export default {
  name: 'app',
  components: {
    recipes,
    heading,

  },

  data(){
    return{
     recipes:[
       {
         id:1,
         name:"chips masala",
         content:"slice potatoes and fry"

       },
       {
         id:2,
         name:"chapati",
         content:"mix flour and roll into circles"

       },

     ],
      postFontSize: 1
    }
  }
}
</script>

<style>

</style>
