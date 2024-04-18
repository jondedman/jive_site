import Header from "./Header"; // Assuming Header is in the same directory
import TwoColumnsWithImage from "./TwoColumnsWithImage";
import StaffColumns from "./StaffColumns";

function App() {
	return (
		<div className="App">
			<Header />
			<TwoColumnsWithImage />
			<StaffColumns />
			{/* Other components go here */}
		</div>
	);
}

export default App;
