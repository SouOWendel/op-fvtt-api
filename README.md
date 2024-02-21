# Qual é a finalidade desta API?

Está API open-source que tem a finalidade de fornecer informações atualizadas e dinâmicas
das atualizações mais recentes do sistema do Ordem Paranormal RPG para FoundryVTT, através
de um _endpoint_ criado por esta API.

# Algumas features presentes nesta API

Esta API foi criada para aprendizado e também para ser útil em outro projeto. Caso queira
entender melhor o que há entre os códigos, abaixo estão algumas funcionalidades presentes:

- **Refresh Token**: dentro de uma API, é um tipo especial de token que permite a um cliente
  obter um novo token de acesso sem precisar passar pelo processo de autenticação completo
  novamente. Isso é útil para evitar que os usuários precisem se conectar com frequência,
  especialmente em aplicativos que exigem acesso contínuo a recursos protegidos.

# Documentação da API

- Endpoint para obter toda a lista de notas de atualização:

```
/notes
```

- Endpoint para obter uma única nota de atualização:

```
/notes/{id}
```
