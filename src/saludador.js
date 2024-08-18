function saludar(nombre, genero, edad) {
  let saludo = `Hola, ${nombre}`;

  if (genero === "masculino") {
    saludo += ", señor";
  } else if (genero === "femenino") {
    saludo += ", señora";
  } else {
    saludo += ", amig@";
  }

  if (edad < 18) {
    saludo += ". ¡Eres joven!";
  } else if (edad < 60) {
    saludo += ". ¡Qué gusto saludarte!";
  } else {
    saludo += ". ¡Un placer conocerte!";
  }

  return saludo;
}

export default saludar;
