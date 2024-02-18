import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import Home from './routes/home.tsx';
import Create from './routes/create.tsx';
import Update from './routes/update.tsx';
import Consult from './routes/consult.tsx';

function App() {
	return (
		<div className="mx-auto max-w-6x1 my-12 space-y-6 p-5 rounded-md bg-white text-slate-900">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create" element={<Create />} />
					<Route path="/update" element={<Update />} />
					<Route path="/consult/:id" element={<Consult />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
