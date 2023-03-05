<template>
    <main>
        <div>
            <h1 class="font-bold text-lg mb-3">Products Page</h1>
            <div class="grid grid-cols-4 gap-5">
                <div v-for="p in products" :key="p.id">
                    <ProductCard :product="p"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
    title: 'Nuxt Small Shop | Products',
    meta: [
        {name: 'description', content: 'Nuxt Small Shop | Products'}
    ]
})

</script>

<style>

</style>