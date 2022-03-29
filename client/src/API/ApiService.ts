import axios from "axios";
import { IResponseData } from "../interfaces/IResponseData";

class ApiService {
	async getData() {
		const url: string = "https://mocki.io/v1/1e73398f-6067-486c-b37c-415136f22756";
		const res = await axios.get(url);
		const resData: IResponseData = res.data;
		return resData;
	}
}

export default ApiService;
