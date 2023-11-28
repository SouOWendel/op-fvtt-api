/**
 *
 */
class Note {
	/**
	 *
	 * @param {*} contructor Variáveis necessárias para criar uma nova nota.
	 */
	constructor({
		id, minCoreVersion, maxCoreVersion, minSysVersion,
		maxSysVersion, type, display, title, content,
	}) {
		this.id = id;
		this.minCoreVersion = minCoreVersion;
		this.maxCoreVersion = maxCoreVersion;
		this.minSysVersion = minSysVersion;
		this.maxSysVersion = maxSysVersion;
		this.type = type;
		this.display = display;
		this.title = title;
		this.content = content;
	}

	/**
	 * Retorna as propriedades do objeto passado. Pega a quantidade de itens
	 * considerados invalidos (os que a propriedade é encontrada, retornam `null`).
	 * Se a propriedade não é encontrada, retorna que está faltando a informação.
	 * @returns {object} Retorna as regras para que seja válido.
	 */
	isValid() {
		const propertyNames = Object.getOwnPropertyNames(this);
		const amountInvalid = propertyNames
			.map((property) => (!!this[property]) ? null : `${property} is missing!`)
			.filter((item) => !!item);

		return {
			valid: amountInvalid.length === 0,
			error: amountInvalid,
		};
	}
}

export default Note;

// const note = new Note({
// 	id: 2,
// 	minCoreVersion: '11',
// 	maxCoreVersion: '11',
// 	minSysVersion: '5.0.0', // optional, inclusive
// 	maxSysVersion: '5.100.0', // optional, exclusive
// 	type: 'prompt', // Type of message: [prompt, chat]
// 	display: 'once', // Time until it goes away: [once, infinite, mm.dd.yyyy]
// 	title: '5.0.1 Release Notes',
// 	content: 'aoba',
// });

// console.log('valid', note.isValid());
