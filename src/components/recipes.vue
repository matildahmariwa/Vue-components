<template>
<div>
    <h1>Recipes</h1>
    <div v-bind:key="recipe.id" v-for="recipe in recipes" >

<recipe v-bind:recipe="recipe"  v-on:enlarge-text="postFontSize += 0.1" ></recipe>
    </div>
</div>
</template>

<script>
    import recipe from './recipe.vue'
export default{
name:"recipes",
    components:{
    recipe
    },
    props:["recipes"],
    postFontSize: 1
}

</script>

<style scoped>

</style>
