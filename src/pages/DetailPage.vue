<template>
	<div :class="$style.container">
		<div :class="$style.main">
			<div :class="$style.header">
				<h4 :class="$style.price">{{ product.name }}</h4>
				<h3 :class="$style.price">{{ product.price + ' $' }}</h3>
			</div>
			<div :class="$style['img-container']">
				<img class="image" :src="product.thumbnailUrl" height="300" />
			</div>
			<Button @click="checkInCart(product)" :apperance="'unprimary'">{{
				getStatus(product).value
			}}</Button>
		</div>
		<div id="product-description" :class="$style.description"></div>
	</div>
</template>
<script setup lang="ts">
import Button from '@components/Button.vue'
import { useProductsStore } from '@store/ProductsStore'
import { computed, onMounted } from 'vue'
import { getStatus } from '@utils/CartUtils'
import { checkInCart } from '@utils/CartUtils'
const product = useProductsStore().currentProduct
onMounted(() => {
	const element = document.getElementById('product-description')
	if (element) {
		element.innerHTML = product.description
	}
})
</script>
<style lang="scss" module>
@import '@scss/colors.scss';
.container {
	height: calc(100% - 70px);
	display: flex;
	gap: 20px;
	justify-content: center;
	align-items: center;
}
.container::before {
	content: '';
	position: absolute;
	height: 600px;
	width: 600px;
	border-radius: 50%;
	z-index: 1;
	background-image: $gradient;
	box-shadow: 10px 1px 50px $pink, -10px -1px 50px $primary;
}
.main {
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	max-height: 500px;
	height: 100%;
}

.header {
	z-index: 10;
	position: relative;
	width: 100%;
	background-color: $black;
	color: $light;
	font-size: 1.2em;
	text-shadow: 1px 1px 10px $pink;
	font-weight: 100;
	text-align: center;
	border-radius: 10px 0px 20px 10px;
	padding: 10px;
}
.header::before {
	content: '';
	position: absolute;
	background-color: $black;
	width: 100%;
	height: 100%;
	top: 0;
	right: 0px;
	border-radius: 20px 0px 20px 0px;
	box-shadow: inset -5px -5px 0px #ffffff;

	z-index: -1;
}
.img-container {
	display: flex;
	position: relative;
	justify-content: center;
	border-radius: 10px;
	max-height: 300px;
	max-width: 300px;
	height: 100%;
	width: 100%;
	overflow: hidden;
	box-shadow: 2px 2px 4px $black;
}
.description {
	z-index: 2;
	display: flex;
	flex-direction: column;
	gap: 20px;
	background-color: $black;
	width: 400px;
	max-height: 500px;
	height: 100%;
	padding: 10px;
	border-radius: 0px 10px 10px 10px;
	color: $light;
	font-size: 1.2em;
	text-shadow: 1px 1px 10px $pink;
	font-weight: 100;
}
</style>
