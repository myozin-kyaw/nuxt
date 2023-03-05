<template>
    <main class="mx-5">
        <div>
            <h1>
                <NuxtLink to="/products" class="text-xl underline underline-offset-4 mt-4">Products</NuxtLink>
            </h1>
        </div>
        <!-- output the page -->
        <div class="py-5">
            <slot />
        </div>
        <header>
            <nav class="flex justify-between py-3 border-2 border-b-0 border-l-0 border-t-1 border-r-0 border-green-500">
                <div><NuxtLink to="/">Nuxt Small Shop</NuxtLink></div>
                <div class="flex gap-5">
                    <div><NuxtLink to="/about">About</NuxtLink></div>
                    <div><NuxtLink to="/products">Products</NuxtLink></div>
                </div>
            </nav>
        </header>
    </main>
</template>