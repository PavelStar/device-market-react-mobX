export interface ItemEntity {
	id?: number;
	title?: string;
	releaseDate?: number;
	isAvailable?: boolean;
	category?: string;
	brand?: string;
	// features?: string[];
	features?: any;
	images?: object;
	priceInfo?: object;
	rating?: number;
	reviewsInfo?: any;
	// reviewsInfo?: { reviewsCount: number; reviews: [] };
}
