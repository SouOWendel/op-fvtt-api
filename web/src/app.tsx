import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import Home from './home.tsx';
import Create from './create.tsx';

function App() {
	return (
		<div className="mx-auto max-w-6x1 my-12 space-y-6 p-5 rounded-md bg-white text-slate-900">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create" element={<Create />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
