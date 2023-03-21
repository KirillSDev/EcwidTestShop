<template>
	<button
		class="main"
		:class="{
			primary: props.apperance === 'primary',
			unprimary: props.apperance === 'unprimary'
		}"
	>
		<slot />
	</button>
</template>

<script lang="ts" setup>
interface IButton {
	apperance: string
}
const props = withDefaults(defineProps<IButton>(), {
	apperance: 'primary'
})
</script>

<style lang="scss" scoped>
@import '@scss/colors.scss';
.main {
	cursor: pointer;
	border: none;
	background-color: $primary;
	color: $light;
	position: relative;
	min-width: 100px;
	padding: 10px;
	min-height: 40px;
	border-radius: 10px;
	font-size: 1em;
	transition: all 0.2s;
}
.main:hover {
	background-color: $light;
	color: $black;
}
.main:hover::before {
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	min-width: 100px;
	min-height: 40px;
	border-radius: 10px;
	border: 1px solid $black;
}
.unprimary {
	background-color: $black;
}
</style>
