function saludar(nombre, genero, edad, idioma) {
  let saludo;

  if (idioma === "espanol") {
    saludo = `Hola, ${nombre}`;

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
  } else if (idioma === "ingles") {
    saludo = `Hello, ${nombre}`;

    if (genero === "masculino") {
      saludo += ", sir";
    } else if (genero === "femenino") {
      saludo += ", madam";
    } else {
      saludo += ", friend";
    }

    if (edad < 18) {
      saludo += ". You're young!";
    } else if (edad < 60) {
      saludo += ". Nice to meet you!";
    } else {
      saludo += ". A pleasure to meet you!";
    }
  }

  return saludo;
}

export default saludar;
