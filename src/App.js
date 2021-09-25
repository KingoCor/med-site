import "./App.css";

const App = () => (

	<div>
		<Header />

	</div>

  );


const Header = () => (
	<header>

		<h1>Formed</h1>
		
		<div>
			<p> Поиск по названию <input></input> </p>

			<button>Поиск по симптомам</button>
		</div>

	</header>
);

export default App;
