<template>
	<div class="header"></div>
	<div class="main"></div>
	<Button :apperance="'unprimary'">Добавить</Button>
	<Button :apperance="'primary'">Купить</Button>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import Button from '@components/Button.vue'
</script>

<style lang="scss">
@import '@scss/colors.scss';
.app {
	color: $primary;
}
</style>
