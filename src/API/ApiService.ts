import axios from "axios";

class ApiService {
	async getData() {
		const url: string = "https://mocki.io/v1/3136a775-993a-4d14-a09c-5aad4cae377c";
		const res = await axios.get(url);
		return res.data;
	}
}

export default ApiService;
