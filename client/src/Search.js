import React from "react"
import "./App.css";
import {articles} from "./App.js"

const getArticlesPreview = (articles_json) => {
	if (articles.message=="articles founded")
	{
		return(articles_json.articles.map(article => (
			<button className="article-preview">
				<div align="left">
					<h1>{article.name}</h1>
					<p>{article.tags}</p>
				</div>

				<div align="right">
					<p>Просмотры: {article.views}</p>
					<p>Рейтинг: {article.rating}</p>
				</div>
			</button>
		)))
	} else {
		return(<button align="center"><h1>Ничего не найдено</h1></button>)
	}
}

const Search = () => (
	<div align="center">
		{getArticlesPreview(articles)}
	</div>
  );

export default Search;
