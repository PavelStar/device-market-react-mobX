import { IFeatures } from "./IFeatures";
import { IreviewsInfo } from "./IReviewsInfo";

export interface ICategoryPageItem {
	id: number;
	count: number;
	title: string;
	releaseDate: number;
	isAvailable: boolean;
	category: string;
	brand: string;
	features: IFeatures;
	images: any;
	priceInfo: any;
	rating: number;
	reviewsInfo: IreviewsInfo;
}
