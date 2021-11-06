import axios from 'axios'

export const get_articles = async (search_input, skip, count) => {
	try 
	{
		const response = await axios.post('http://localhost:20000/api/article-methods/get-articles', 
		{
			"search_input": search_input,
			"skip": skip,
			"count": count
		})
		return(response.data)		
	} 
	catch (e) { return(e.response.data) }
}
