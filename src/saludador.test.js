import saludar from "./saludador";

test('Saludar en español con nombre', () => {
  expect(saludar("Carlos", "masculino", null, "espanol")).toBe("Hola Carlos señor.");
});

test('Saludar en inglés con nombre y edad', () => {
  expect(saludar("Alice", "femenino", 30, "ingles")).toBe("Hello Alice madam and you are 30 years old.");
});

test('Saludar sin nombre y género en español', () => {
  expect(saludar("", "", 25, "espanol")).toBe("Hola y tienes 25 años.");
});
