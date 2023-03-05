<template>
    <main>
        <div>
            <h1 class="font-bold text-lg mb-3">About Page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi atque iure omnis 
                quibusdam maxime ipsa nobis asperiores enim laudantium cumque?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi atque iure omnis 
                quibusdam maxime ipsa nobis asperiores enim laudantium cumque?
            </p>
            <p>{{ data }}</p>
            <p>{{ currency }}</p>
        </div>
    </main>
</template>

<script setup>
const { currency } = await useFetch('/api/currency/GBP')
const { data } = await useFetch('/api/test?name=mario', {
    method: 'POST',
    body: {age: 30}
})
</script>

<style>

</style>