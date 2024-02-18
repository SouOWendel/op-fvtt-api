import axios from 'axios';
import { EventHandler, FormEvent, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';

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

export default function Create() {
	const [values, setValues] = useState<notes>({ id: 0 });
	const editorRef = useRef<TinyMCEEditor | null>(null);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		setValues({ ...values, content: editorRef.current?.getContent() });
		axios
			.post('http://localhost:3000/notes', values)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	const log = () => {
		if (editorRef.current) {
			console.log(typeof editorRef.current.getContent());
			console.log(editorRef.current.getContent());
		}
	};

	return (
		<div className="">
			<div>
				<h2 className="font-4xl">Adicionar nota</h2>
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
					<Editor
						apiKey="w762iybq75pjueklwxr113dgarjv4eg3fyer23ogg2nnjkmq"
						onInit={(evt, editor) => (editorRef.current = editor)}
						initialValue="<p>This is the initial content of the editor.</p>"
						onChange={() =>
							setValues({ ...values, content: editorRef.current?.getContent() })
						}
						init={{
							height: 500,
							menubar: false,
							plugins: [
								'advlist',
								'autolink',
								'lists',
								'link',
								'image',
								'charmap',
								'preview',
								'anchor',
								'searchreplace',
								'visualblocks',
								'code',
								'fullscreen',
								'insertdatetime',
								'media',
								'table',
								'code',
								'help',
								'wordcount',
							],
							toolbar:
								'undo redo | blocks | ' +
								'bold italic forecolor | alignleft aligncenter ' +
								'alignright alignjustify | bullist numlist outdent indent | ' +
								'removeformat | help',
							content_style:
								'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
						}}
					/>
					{/* <button type="button" onClick={log}>
						Log editor content
					</button> */}
					<button type="submit">Enviar</button>
				</form>
			</div>
		</div>
	);
}
