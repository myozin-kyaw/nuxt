<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Opps...</p>
        <p class="mt-7">{{ error.message }}</p>
        <p><button class="btn mt-7" @click="handleClearError">Go Back</button></p>
    </div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({redirect: '/'})
</script>

<style scoped>

</style>