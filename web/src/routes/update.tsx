import axios from 'axios';
import { FormEvent, useState } from 'react';

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

export default function Update() {
	const [values, setValues] = useState<notes>({ id: 0, title: '' });

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log(values);
		axios
			.put(`http://localhost:3000/notes/${values.id}`, values)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<div className="">
			<div>
				<h2 className="font-4xl">Atualizar uma nota</h2>
				<form
					className="grid grid-cols-2 gap-x-2 gap-y-2"
					onSubmit={handleSubmit}
				>
					<div className="flex flex-row gap-1 items-center">
						<label htmlFor="">ID</label>
						<input
							type="number"
							placeholder="Insira o ID"
							className="p-1 rounded-sm flex-1"
							onChange={(e) =>
								setValues({ ...values, id: Number(e.target.value) })
							}
						/>
					</div>
					<div className="flex flex-row gap-1 items-center">
						<label htmlFor="">Versão mínima Core</label>
						<input
							type="text"
							placeholder="Insira a versão mínima core."
							className="p-1 rounded-sm flex-1"
							onChange={(e) =>
								setValues({ ...values, minCoreVersion: e.target.value })
							}
						/>
					</div>
					<div className="flex flex-row gap-1 items-center">
						<label htmlFor="">Versão máxima Core</label>
						<input
							type="text"
							placeholder="Insira a versão máxima core."
							className="p-1 rounded-sm flex-1"
							onChange={(e) =>
								setValues({ ...values, maxCoreVersion: e.target.value })
							}
						/>
					</div>
					<div className="flex flex-row gap-1 items-center">
						<label htmlFor="">Versão mínima do Sistema</label>
						<input
							type="text"
							placeholder="Insira a versão mínima do sistema."
							className="p-1 rounded-sm flex-1"
							onChange={(e) =>
								setValues({ ...values, minSysVersion: e.target.value })
							}
						/>
					</div>
					<div className="flex flex-row gap-1 items-center">
						<label htmlFor="">Versão máxima do Sistema</label>
						<input
							type="text"
							placeholder="Insira a versão máxima do sistema."
							className="p-1 rounded-sm flex-1"
							onChange={(e) =>
								setValues({ ...values, maxSysVersion: e.target.value })
							}
						/>
					</div>
					<div className="flex flex-row gap-1 items-center">
						<label htmlFor="">Tipo de Mensagem</label>
						<input
							type="text"
							placeholder="Insira o tipo de mensagem. (ex.: prompt)"
							className="p-1 rounded-sm flex-1"
							onChange={(e) => setValues({ ...values, type: e.target.value })}
						/>
					</div>
					<div className="flex flex-row gap-1 items-center">
						<label htmlFor="">Tipo de Display</label>
						<input
							type="text"
							placeholder="Insira o tipo de display. (ex.: once)"
							className="p-1 rounded-sm flex-1"
							onChange={(e) =>
								setValues({ ...values, display: e.target.value })
							}
						/>
					</div>
					<div className="flex flex-row gap-1 items-center">
						<label htmlFor="">Título</label>
						<input
							type="text"
							placeholder="Insira o título."
							className="p-1 rounded-sm flex-1"
							onChange={(e) => setValues({ ...values, title: e.target.value })}
						/>
					</div>
					<div className="flex flex-row gap-1 items-center">
						<label htmlFor="">Conteúdo</label>
						<textarea
							placeholder="Insira o conteúdo em HTML."
							className="p-1 rounded-sm flex-1"
							onChange={(e) =>
								setValues({ ...values, content: e.target.value })
							}
						/>
					</div>
					<button type="submit">Enviar</button>
				</form>
			</div>
		</div>
	);
}
