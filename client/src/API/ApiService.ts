import axios from "axios";
import { IResponseData } from "../interfaces/IResponseData";
import ResponseDataState from "../store/ResponseDataState";

class ApiService {
	async getData() {
		const url: string = "https://mocki.io/v1/0d82277f-cf55-4545-b07a-4f811581c57b";
		const res = await axios.get(url);
		const resData: IResponseData = res.data;
		return resData;
	}
}

export default ApiService;
