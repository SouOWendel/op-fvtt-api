// Garantia que os dados que iram pra o banco de dados estejam de acordo.

/**
 * Factory Function é a implementação em JS de um dos padrões de projetos
 * criacionais, o Factory Method, existente como em outras linguagens
 * orientadas a objetos. Este padrão encapsula a criação de objetos
 * a partir de um de seus métodos, funcionando como uma fábrica de
 * objetos propriamente dita.
 * @param data
 * @returns {object} Retorna um objecto com padrão de usuário e senha para os controllers.
 */
const userModel = (data) => {
	const {username, password} = data;
	return {username, password};
};

export default userModel;
