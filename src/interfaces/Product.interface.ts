export interface IProduct {
	id: number
	name: string
	price: number
	imageUrl: string
	thumbnailUrl: string
	smallThumbnailUrl: string
	description: string
	categoryIds: number[]
	galleryImages: IGalleryProductImages[]
}

export interface IGalleryProductImages {
	id: number
	thumbnailUrl: string
}
