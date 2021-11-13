import axios from 'axios'
import  {API_URL} from "../config" 

export const get_articles = async (search_input, skip, count) => {
	try 
	{
		const response = await axios.post(API_URL+'api/article-methods/get-articles', 
		{
			"search_input": search_input,
			"skip": skip,
			"count": count
		})
		return(response.data)		
	} 
	catch (e) { return(e.response.data) }
}
