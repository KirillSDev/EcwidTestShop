<template>
	<div :class="$style.container">
		<div :class="$style.main" v-if="cartStore.cart.length">
			<div :class="$style['items']">
				<TransitionGroup name="animation">
					<div
						:class="$style['cart-item']"
						v-for="product in cartStore.cart"
						:key="product.id"
					>
						<img
							:src="product.smallThumbnailUrl"
							alt="image"
							height="50"
							width="50"
						/>
						<p :class="$style.name">{{ product.name }}</p>
						<p :class="$style.price">{{ product.price + ' $' }}</p>
						<Button
							@click="cartStore.deleteFromCart(product)"
							:class="$style.button"
							>Удалить</Button
						>
					</div>
				</TransitionGroup>
			</div>
			<div :class="$style['final-cost']">
				{{ 'Итого: ' + cartStore.getFullPrice() + ' $' }}
			</div>
			<Button :class="$style['buy-btn']" @click="isOrdered = true">
				Оформить заказ
			</Button>
			<div v-if="isOrdered" :class="$style['successful-purchase']">
				Спасибо за покупку
			</div>
		</div>
		<div v-else :class="$style.empty">В корзине ничего нет.</div>
	</div>
</template>

<script setup lang="ts">
import { useCartStore } from '@store/CartStore'
import Button from '@components/Button.vue'
import { ref } from 'vue'

const isOrdered = ref(false)
const cartStore = useCartStore()
</script>

<style lang="scss" module>
@import '@scss/colors.scss';

.container {
	height: calc(100vh - 70px);
	position: relative;
}
.main {
	margin: 0 auto;
	margin-top: 100px;
	width: 500px;
	padding: 10px;
	background-color: $black;
	height: fit-content;
	display: flex;
	border-radius: 10px;
	flex-direction: column;
	gap: 10px;
}

.cart-item {
	border-radius: 10px;
	color: $light;
	align-items: center;
	background-color: $unprimary;
	padding: 10px;
	display: grid;
	grid-template-columns: auto 2fr 1fr 1fr;
	gap: 10px;
}
.items {
	display: flex;
	flex-direction: column;
	gap: 10px;
	overflow-y: scroll;
	max-height: 400px;
}
.name {
	text-shadow: 1px 1px 1px $black;
}
.price {
	justify-self: center;
	background-color: $primary;
	padding: 10px;
	border-radius: 10px;
}
.button {
	justify-self: end;
}
.buy-btn {
	margin: 0 auto;
}
.final-cost {
	color: $light;
	text-align: center;
}
.empty {
	font-size: 2em;
	height: 100px;
	position: absolute;
	top: 50%;
	margin-top: -50px;
	text-align: center;
	width: 100%;
}
.successful-purchase {
	position: fixed;
	top: 50%;
	left: 50%;
	background-image: $gradient;
	width: calc(100vw - 300px);
	height: calc(100vh - 300px);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50px;
	font-size: 2em;
	color: $light;
	text-shadow: 1px 1px 1px $black;
	transform: translate(-50%, -50%);
}
.animation-enter-active {
	transition: all 0.3s ease-out;
}

.animation-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.animation-enter-from,
.animation-leave-to {
	transform: translateX(20px);
	opacity: 0;
}
</style>
