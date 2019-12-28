<template>
    <div>

      <h2>{{recipe.name}} <br>
          {{recipe.content}}
      </h2>
        <button  v-on:click="$emit('enlarge-text')">
            Enlarge text
        </button>

        <hr>
    </div>
</template>
<script>
    export default {
        name:"recipe",
        props:["recipe"]
    }

</script>
<style scoped>

</style>
