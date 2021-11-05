import React from "react";
import Home from "./Home";
import Article from "./Article";
import Search from "./Search";
import Search_by_tag from "./Search_by_tag";
import {Route, Link} from "react-router-dom"

const App = () => (
	<div>
		<Header />

		<Route path="/" exact component={Home} />
		<Route path="/Article" component={Article} />
		<Route path="/Search" component={Search} />
		<Route path="/Search_by_tag" component={Search_by_tag} />
	</div>
  );

const Header = () => (
	<header>

		<Link to={"/"}><h1>Formed</h1></Link>

		<div>
			<p> 
				<input></input> 
				<Link to={"/Search"}> 
					<button>Поиск</button> 
				</Link>
			</p>
			
			<Link to={"/Search_by_tag"}>
				<button>Поиск по симптомам</button>
			</Link>
		</div>

	</header>
);

export default App;
