/**
 * @class
 */
class UpdateNotesService {
	/**
	 * @param {*} notesRepository - Recebe os repositórios.
	 */
	constructor({updateNotesRepository}) {
		this.updateNotesRepository = updateNotesRepository;
	}

	/**
	 * Busca um item do banco de dados pelo ID ou retorna toda a lista de itens.
	 * @param {number} itemId - Informa um ID
	 * @returns {object|Array} Retorna um objeto ou um array com as informações do arquivo.
	 */
	async find(itemId) {
		return this.updateNotesRepository.find(itemId);
	}

	/**
	 * Essa função cria um novo objeto dentro do arquivo atual (currentFile).
	 * @param {object} data - Informações do novo objeto a ser criado.
	 * @returns {object|Array} Retorna um objeto ou um array com as informações do arquivo.
	 */
	async create(data) {
		return this.updateNotesRepository.create(data);
	}
}

export default UpdateNotesService;
