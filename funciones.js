// Ambos tipos de funcion pueden llevar parámetros,
// que son los datos que necesitan para ejecutarse.

// Declarativas

function miFuncionDeclarativa() {}

// Llamamos una función de la siguiente manera

miFuncionDeclarativa();

// Expresiva o anónima
// (se le llama así porque no se le da un nombre a la función)

var miFuncionExpresiva = function (a, b) {
  return a + b;
};

// Llamamos una función de la siguiente manera

miFuncionExpresiva(2, 4);
