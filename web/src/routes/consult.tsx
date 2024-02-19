import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

interface notes {
	id?: number;
	minCoreVersion?: string;
	maxCoreVersion?: string;
	minSysVersion?: string;
	maxSysVersion?: string;
	type?: string;
	display?: string;
	title?: string;
	content?: string;
}

export default function Consult() {
	const { id } = useParams();
	const [notes, setNotes] = useState<notes>({});
	useEffect(() => {
		axios
			.get('http://localhost:3000/notes/' + id)
			.then((res) => {
				console.log(res);
				setNotes(res.data[0]);
			})
			.catch((err) => console.log(err));
	}, [id]);

	return (
		<div className="">
			<h1>
				Consulta <Link to="/">Voltar</Link>
			</h1>
			<p className="">{notes.id}</p>
			<p className="">{notes.title}</p>
			<p className="">{notes.content}</p>
		</div>
	);
}
