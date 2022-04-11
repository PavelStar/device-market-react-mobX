import axios from "axios";
import { IResponseData } from "../interfaces/IResponseData";
import ResponseDataState from "../store/ResponseDataState";

class ApiService {
	async getData() {
		const url: string = "https://mocki.io/v1/6d8793a2-0dcd-4f83-ac26-c325736edda1";
		const res = await axios.get(url);
		const resData: IResponseData = res.data;
		return resData;
	}
}

export default ApiService;
