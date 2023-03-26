<template>
	<div :class="$style.container">
		<div :class="$style['image-container']">
			<img :class="$style['main-image']" :src="currentImage.thumbnailUrl" />
		</div>
		<div :class="$style['product-details']">
			<div :class="$style['details-header']">
				<h3 :class="$style.name">{{ product.name }}</h3>
				<h4 :class="$style.price">{{ product.price + ' $' }}</h4>
			</div>
			<h4 :class="$style.info">Информация о товаре:</h4>
			<div
				id="product-description"
				:class="$style.description"
				v-html="product?.description"
			></div>
			<div :class="$style.gallery">
				<img
					@click="handleImageClick(img)"
					v-for="img in images"
					:key="img.id"
					:class="$style['img-from-gallery']"
					:src="img.thumbnailUrl"
					height="100"
				/>
			</div>
			<Button
				style="max-width: none"
				:class="$style['buy-btn']"
				@click="checkInCart(product)"
				:apperance="'unprimary'"
				>{{ getStatus(product).value }}</Button
			>
		</div>
	</div>
</template>
<script lang="ts" setup>
import Button from '@components/Button.vue'
import { ref } from 'vue'
import { getStatus } from '@utils/CartUtils'
import { checkInCart } from '@utils/CartUtils'
import { useProductsStore } from '@store/ProductsStore'
import { IGalleryProductImages, IProduct } from '@interfaces/Product.interface'

const props = defineProps<{ product: IProduct }>()
const currentProduct = ref(props.product)

const images = ref([...currentProduct.value.galleryImages])
const currentImage = ref({
	id: 51245,
	thumbnailUrl: currentProduct.value.thumbnailUrl
})
const handleImageClick = (img: IGalleryProductImages) => {
	const imageFromGallery = img
	images.value = images.value.concat(currentImage.value)
	currentImage.value = img
	images.value = images.value.filter((image) => image.id !== img.id)
}
</script>
<style lang="scss" module>
@import '@scss/colors.scss';
.container {
	display: flex;
	gap: 20px;
	margin: 0 auto;
	align-items: center;
	padding: 10px;
	width: fit-content;
}
.image-container {
	max-width: 300px;
	width: 100%;
	height: 300px;
	border-radius: 10px;
	display: block;

	overflow: hidden;
	position: relative;
}
.main-image {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	max-width: 300px;
}
.product-details {
	max-width: 800px;
	width: 100%;
	font-size: 1.2em;
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.info {
	font-weight: 100;
}
.details-header {
	text-align: center;
}
.description {
	display: flex;
	flex-direction: column;
	gap: 10px;
	line-height: calc(1.4em + 2px);
	font-style: italic;
}
.gallery {
	align-items: center;
	display: flex;
	gap: 10px;
}
.img-from-gallery {
	cursor: pointer;
	border: 1px solid $light;
	transition: all 0.3s;
}
.img-from-gallery:hover {
	border: 1px solid $black;
}

@media (max-width: 750px) {
	.container {
		flex-direction: column;
	}
}
</style>
