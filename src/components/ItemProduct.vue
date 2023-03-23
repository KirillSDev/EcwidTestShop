<template lang="">
	<div class="container">
		<div class="header">
			<h3 class="name">{{ product.name }}</h3>
			<p class="price">{{ product.price + ' $' }}</p>
		</div>
		<div class="img-container">
			<img class="image" :src="product.imageUrl" height="200" />
		</div>
		<div class="buy-btn">
			<Button :apperance="'unprimary'">Купить</Button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Button from './Button.vue'
import { ref, defineProps } from 'vue'
import { IProduct } from '@interfaces/Product.interface'

interface IProps {
	product: Omit<IProduct, 'description'>
}
const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
@import '@scss/colors.scss';

//main
.container {
	cursor: pointer;
	color: $light;
	padding: 10px;
	max-width: 220px;
	border-radius: 10px;
	background-image: linear-gradient(
		to left top,
		#f5e9cf,
		#f1cca8,
		#f1ad8a,
		#f08a7a,
		#e96479
	);
	position: relative;
	transition: all 0.2s;
	display: flex;
	flex-direction: column;
}
.container::before {
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	border-radius: 10px;
	transform: translate(-50%, -50%);
	transition: all 1s;
}
.header {
	display: flex;
	height: fit-content;
	min-height: 80px;
	justify-content: space-between;
	gap: 5px;
}
.name {
	word-break: break-word;
}
.buy-btn {
	margin-top: 10px;
	display: flex;
	justify-content: center;
}

.price {
	background-color: $black;
	max-width: fit-content;
	width: 100%;
	height: fit-content;
	margin: auto 0;
	padding: 10px;
	border-radius: 30px;
}

.image {
	transition: transform 1s;
}
.img-container {
	display: flex;
	justify-content: center;
	border-radius: 10px;
	max-height: 200px;
	max-width: 200px;
	height: 100%;
	width: 100%;
	overflow: hidden;
	box-shadow: 2px 2px 4px $black;
}

//animations
.container:hover {
	background-color: $light;
	.image {
		transform: scale(1.2);
	}
	transform: scale(1.06);
}
.container:hover::before {
	content: '';
	border: 1px solid $black;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
	min-height: 40px;
	border-radius: 10px;
}
</style>
