<!-- https://jsdoc.app/tags-param -->

Para funções com parametros é necessário apontar em um comentário de JSDoc logo acima, as seguintes informações obrigatórias: nome e tipo.

A descrição é algo opcional, no entanto, bastante útil para descrever o funcionamento do código.

<p>The <code>@param</code> tag provides the name, type, and description of a function parameter.</p>

<p>The <code>@param</code> tag requires you to specify the name of the parameter you are documenting. You can also include the parameter's type, enclosed in curly brackets, and a description of the parameter.</p>

```js
/**
 * @param {string} somebody - Somebody's name.
 */
function sayHello(somebody) {
    alert('Hello ' + somebody);
}
```