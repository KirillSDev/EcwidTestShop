<template>
	<header :class="$style.header">
		<p :class="$style.home" @click="goToHome">Mini-shop - Home</p>
		<ICartButton @click="goToCart" />
	</header>
	<main :class="$style.main">
		<slot />
	</main>
</template>
<script setup lang="ts">
import ICartButton from '@components/CartButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToCart = () => {
	router.push({
		name: 'cart'
	})
}
const goToHome = () => {
	router.push({
		name: 'home'
	})
}
</script>
<style lang="scss" module>
@import '@scss/colors.scss';
.header {
	display: flex;
	justify-content: space-between;
	min-height: 50px;
	padding: 15px;
	background-color: $black;
	color: white;
	align-items: center;
}
.main {
	overflow: scroll;
	overflow-x: hidden;
	padding: 10px 20px;
	height: calc(100vh - 70px);
}
.home {
	cursor: pointer;
}
.home:hover {
	opacity: 0.7;
}
</style>
