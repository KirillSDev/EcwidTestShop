<template>
	<div class="header">
		<p>Mini Shop</p>
		<ICartButton :quantity="5" />
	</div>
	<div class="main"></div>
	<Button :apperance="'unprimary'">Добавить</Button>
	<Button :apperance="'primary'">Купить</Button>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import Button from '@components/Button.vue'
import ICartButton from '@components/CartButton.vue'
</script>

<style lang="scss" scoped>
@import '@scss/colors.scss';
.header {
	display: flex;
	justify-content: space-between;
	padding: 20px;
	background-color: $black;
	color: white;
	align-items: center;
}
.app {
	color: $primary;
}
</style>
