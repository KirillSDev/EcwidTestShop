<template>
	<button class="button">
		<CartIcon class="icon" />
		<div class="quantity" v-if="quantityProducts > 0 && quantityProducts < 10">
			{{ quantityProducts }}
		</div>
		<div class="quantity" v-else-if="quantityProducts > 9">>9</div>
	</button>
</template>

<script lang="ts" setup>
import CartIcon from '@assets/icons/cart.svg?component'
import { defineProps } from 'vue'
import { ref } from 'vue'

interface ICartButton {
	quantity: number
}
const props = withDefaults(defineProps<ICartButton>(), {
	quantity: 0
})
const quantityProducts = ref(props.quantity)
</script>

<style lang="scss" scoped>
@import '@scss/colors.scss';
.button {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	cursor: pointer;
	max-width: 100px;
	width: 100%;
	border: none;
	min-height: 40px;
	border-radius: 10px;
	background-color: white;
	transition: background-color 0.3s;
}
.icon {
	background-color: rgba(255, 255, 255, 0);
	fill: $primary;
	height: 30px;
	width: 30px;
	overflow: hidden;
	transition: fill 0.5s;
}
.quantity {
	font-weight: 700;
	font-size: 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid $primary;
	width: 25px;
	height: 25px;
	border-radius: 10px;
	color: $primary;
	transition: all 0.5s;
}
.button:hover {
	background-color: $unprimary;
	.icon {
		fill: white;
	}
	.quantity {
		color: white;
		border-color: white;
	}
}
</style>
