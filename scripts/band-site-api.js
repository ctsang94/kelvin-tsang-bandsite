class BandSiteApi {
	constructor(apiKey) {
		this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
		this.apiKey = apiKey;
	}
	async fetchComments() {
		try{
			const response = await axios.get(
			this.baseUrl + "comments?api_key=" + this.apiKey);
			return response.data;
		}
		catch(error){
			console.log(error);
		}
	}
	async postNewComments(newComment) {
		try{
			const response = await axios.post(this.baseUrl + "comments?api_key=" + this.apiKey, newComment, 
			{
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
		return response;
		}
		catch(error){
			console.log(error);
		}
	}
}

const myConnection = new BandSiteApi("8dfe898d-4c6d-4e66-85eb-cbf8650429a8");
