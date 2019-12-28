<template>
<div>
    <div v-bind:key="recipe.id" v-for="recipe in recipes" >
{{recipe.title}}
    </div>
</div>
</template>

<script>
export default{
name:"recipes",
    props:["recipes"]
}
</script>

<style scoped>

</style>
