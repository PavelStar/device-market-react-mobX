import axios from "axios";

class ApiService {
	async getData() {
		const url: string = "https://mocki.io/v1/37a754d6-2e92-4b4e-b43b-057bf5af2eee";
		const res = await axios.get(url);
		return res.data;
	}
}

export default ApiService;
