<template>
    <div>

      <h2>{{recipe.name}} <br>
          {{recipe.content}} <br>

      </h2>
        <button  v-on:click="$emit('reduce-text')">
           Reduce text
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
