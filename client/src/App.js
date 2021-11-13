import React from "react";
import Home from "./Home";
import Article from "./Article";
import Search from "./Search";
import {Route, Link} from "react-router-dom";
import {get_articles} from "./actions/article.js";

const App = () => (
	<div>
		<Header />

		<Route path="/" exact component={Home} />
		<Route path="/Article" component={Article} />
		<Route path="/Search" component={Search} />
	</div>
  );

let search_input=""

const Header = () => (
	<header>

		<Link to={"/"}><h1>Formed</h1></Link>

		<div>
			<p> 
				<input onChange={ (event) => {search_input=event.target.value} }></input> 
				<Link to={"/Search"}> 
					<button onClick={GetArticles}>Поиск</button> 
				</Link>
			</p>
		</div>

	</header>
);

let articles = {message:"None"}
const GetArticles = () => {
	const SetArticles = (val) => {
		articles=val
	}

	get_articles(search_input, 0, 100).then((res)=>{SetArticles(res)})
	console.log(articles)
}

export default App;
export {articles}
