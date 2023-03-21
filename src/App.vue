<template>
	<div id="app">
		<div class="header">
			<p>Mini Shop</p>
			<ICartButton :quantity="5" />
		</div>
		<div class="main">
			<Button :apperance="'unprimary'">Добавить</Button>
			<Button :apperance="'primary'">Купить</Button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import Button from '@components/Button.vue'
import ICartButton from '@components/CartButton.vue'
</script>

<style lang="scss" scoped>
@import '@scss/colors.scss';
#app {
	height: 100vh;
}
.header {
	display: flex;
	justify-content: space-between;
	padding: 20px;
	background-color: $black;
	color: white;
	align-items: center;
}
.main {
	height: 100%;
	background-color: $light;
}
</style>
