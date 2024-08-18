function saludar(nombre, genero) {
  let saludo = `Hola, ${nombre}`;
  
  if (genero === "masculino") {
    saludo += ", señor";
  } else if (genero === "femenino") {
    saludo += ", señora";
  } else {
    saludo += ", amig@";
  }

  return saludo;
}

export default saludar;
