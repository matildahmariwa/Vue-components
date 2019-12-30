<template>
    <div>
        <h1>Recipes</h1>
        <div :style="{ fontSize: postFontSize + 'em' }">
            <recipe
                    v-for="recipe in recipes"
                    v-bind:key="recipe.id"
                    v-bind:recipe="recipe"
                    v-on:reduce-text="postFontSize -= 0.1"
            >
            </recipe>
        </div>
    </div>
</template>

<script>
    import recipe from './recipe.vue'

    export default {
        name: "recipes",
        components: {
            recipe
        },
        data: function () {
            return {
                postFontSize: 1
            }
        },
        props: ["recipes"],

    }

</script>

<style scoped>

</style>
