<template>
    <main>
        <Head>
            <Title>Nutx Small Shop | {{ product.title }}</Title>
            <Meta name="description" :content="product.description"></Meta>
        </Head>        
        <ProductDetail :product="product"/>
    </main>
</template>
<script setup>
definePageMeta({
    layout: 'products'
})
const { id } = useRoute().params

const { data: product } = await useFetch('https://fakestoreapi.com/products/'+ id, { key: id })

if (! product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}

</script>

<style>

</style>