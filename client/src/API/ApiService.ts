import axios from "axios";
import { IResponseData } from "../interfaces/IResponseData";
import ResponseDataState from "../store/ResponseDataState";

class ApiService {
	async getData() {
		const url: string = "https://mocki.io/v1/f184f3e6-22cb-4ce6-87bf-c51b056621fc";
		const res = await axios.get(url);
		const resData: IResponseData = res.data;
		return resData;
	}
}

export default ApiService;
