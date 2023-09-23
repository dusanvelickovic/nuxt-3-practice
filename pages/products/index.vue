<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div class="" v-for="(p, index) in products" :key="index">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products',
    })

    // Fetch products from API
    const { data: products } = await useFetch('https://fakestoreapi.com/products')
    
    // Override the default meta
    useHead({
        title: 'Nuxt Dojo | Merch',
        meta: [
            { name: 'description', content: 'Nuxt 3 Merch'},
        ],
    })
</script>