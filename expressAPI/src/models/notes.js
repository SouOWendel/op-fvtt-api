// Garantia que os dados que iram pra o banco de dados estejam de acordo.

/**
 * Factory Function é a implementação em JS de um dos padrões de projetos
 * criacionais, o Factory Method, existente como em outras linguagens
 * orientadas a objetos. Este padrão encapsula a criação de objetos
 * a partir de um de seus métodos, funcionando como uma fábrica de
 * objetos propriamente dita.
 */

/**
 *
 * @param data
 * @returns {object}
 */
const notesModel = (data) => {
	const {id, minCoreVersion, maxCoreVersion, minSysVersion, maxSysVersion, type,
		display, title, content} = data;
	return {id, minCoreVersion, maxCoreVersion, minSysVersion, maxSysVersion, type,
		display, title, content};
};

export default notesModel;
