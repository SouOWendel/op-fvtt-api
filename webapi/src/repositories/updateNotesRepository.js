import {readFile, writeFile} from 'fs/promises';

/**
 * Com diversas funções, tem o principal intuito de resgatar informações
 * dos bancos de dados.
 * @class
 */
class UpdateNotesRepository {
	/**
	 * @param {string} objectWithFiles - Chama os caminhos para os arquivos.
	 */
	constructor({file}) {
		this.file = file;
	}

	/**
	 * Lê o arquivo informado no instanciamento e transforma-o em JSON.
	 * @returns {Promise<Array>} A leitura de um arquivo JSON e a sua conversão.
	 */
	async _currentFileContent() {
		return JSON.parse(await readFile(this.file));
	}

	/**
	 * Busca um item do banco de dados pelo ID ou retorna toda a lista de itens.
	 * @param {number} itemId - Informa um ID
	 * @returns {object|Array} Retorna um objeto ou um array com as informações do arquivo.
	 */
	async find(itemId) {
		const all = await this._currentFileContent();
		if (!itemId) return all;

		return all.find(({id}) => itemId === id);
	}

	/**
	 * Essa função cria um novo objeto dentro do arquivo atual (currentFile).
	 * @param {object} data - Informações do novo objeto a ser criado.
	 * @returns {object} ID do novo objeto
	 */
	async create(data) {
		const currentFile = await this._currentFileContent();
		currentFile.push(data);

		await writeFile(this.file, JSON.stringify(currentFile));
		return data.id;
	}
}

export default UpdateNotesRepository;

// updateNotesRepository.create({id: 2, content: 'yeah!'})
// 	.then(console.log)
// 	.catch((error) => console.log('error', error));

// updateNotesRepository.find().then(console.log).catch((error) => console.log('error', error));
