import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface notes {
	id: number;
	minCoreVersion?: string;
	maxCoreVersion?: string;
	minSysVersion?: string;
	maxSysVersion?: string;
	type?: string;
	display?: string;
	title?: string;
	content?: string;
}

export default function Home() {
	// eslint-disable-next-line max-len
	// https://bobbyhadz.com/blog/react-typescript-usestate-array-of-objects#type-usestate-as-array-of-objects-using-a-type-alias-or-an-interface
	const [data, setData] = useState<notes[]>([]);
	const navigate = useNavigate();
	useEffect(() => {
		axios
			.get('http://localhost:3000/notes')
			.then((res) => {
				setData(res.data);
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get('http://localhost:3000/login/check-auth', {
				headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				navigate('/login');
				console.log(err);
			});
	}, [navigate]);

	function deleteNote(id: number) {
		axios
			.delete(`http://localhost:3000/notes/${id}`)
			.then(() => setData(data.filter((post) => post.id !== id)))
			.catch((err) => console.log(err));
	}

	return (
		<div>
			<h2 className="text-4xl font-bold leading-5 pb-8 pt-2">
				Notas de Atualização
			</h2>
			<div className="flex">
				<Link
					to="/create"
					className="py-1 px-2 mx-1 rounded-md bg-slate-700 text-slate-50"
				>
					Criar nova nota
				</Link>
			</div>
			<table className="table-fixed w-full text-sm border-collapse">
				<thead>
					<tr>
						<th className="w-8">Id</th>
						<th className="w-28">Versão Core</th>
						<th className="w-28">Versão Sistema</th>
						<th className="w-20">Tipo</th>
						<th>Título</th>
						<th>Conteúdo</th>
						<th className="w-60">Funções</th>
					</tr>
				</thead>
				<tbody>
					{data.map((notes, index) => {
						return (
							<tr key={notes.id}>
								<td>{notes.id}</td>
								<td className="p-1">
									{notes.minCoreVersion}v - {notes.maxCoreVersion}v
								</td>
								<td className="p-1">
									{notes.minSysVersion} - {notes.maxSysVersion}
								</td>
								<td className="p-1">{notes.type}</td>
								<td className="p-1">{notes.title}</td>
								<td className="p-1">{notes.content}</td>
								<td>
									<Link
										to={`/consult/${notes.id}`}
										className="py-1 px-2 mx-1 rounded-md bg-slate-700 text-slate-50"
									>
										Consultar
									</Link>
									<Link
										to={`/update/${notes.id}`}
										className="py-1 px-2 mx-1 rounded-md bg-slate-700 text-slate-50"
									>
										Editar
									</Link>
									<button
										className="py-1 px-2 mx-1 rounded-md bg-slate-700 text-slate-50"
										onClick={() => deleteNote(notes.id)}
									>
										Deletar
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
