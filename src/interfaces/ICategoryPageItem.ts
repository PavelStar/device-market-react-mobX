import { IFeatures } from "./IFeatures";
import { IPriceInfo } from "./IPriceInfo";
import { IreviewsInfo } from "./IReviewsInfo";

export interface ICategoryPageItem {
	id: number;
	count: number;
	title: string;
	color: string;
	releaseDate: number;
	isAvailable: boolean;
	category: string;
	brand: string;
	features: IFeatures;
	images: any;
	priceInfo: IPriceInfo;
	rating: number;
	reviewsInfo: IreviewsInfo;
}
