<template>
    <main class="mx-5">
        <header>
            <nav class="flex justify-between py-3 border-2 border-b-1 border-l-0 border-t-0 border-r-0 border-green-500">
                <div><NuxtLink to="/" class="">Nuxt Small Shop</NuxtLink></div>
                <div class="flex gap-5">
                    <div><NuxtLink class="" to="/about">About</NuxtLink></div>
                    <div><NuxtLink class="btn" to="/products">Products</NuxtLink></div>
                    <div><NuxtLink class="btn" to="/products/abc">abc</NuxtLink></div>
                </div>
            </nav>
        </header>
        <!-- output the page -->
        <div>
            <slot />
        </div>
    </main>
</template>

<style>
.router-link-active {
    color: rgb(33, 228, 102);
}
</style>