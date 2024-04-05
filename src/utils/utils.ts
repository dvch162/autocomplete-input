import { evaluate } from 'mathjs';
import { AutocompleteItem } from "../App";


export const fetchDataFromApi = async (query: string | undefined) => {
    const url = "https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete";
    const response = await fetch(`${url}?name=${query}`);
    const data = await response.json();
    return data;
  };

export const symbols = ["+", "-", "*", "/"];

export const calculateAmount = (tags: AutocompleteItem[]): number => {
  let expression = "";
  tags.forEach((item) => {
    switch (item.name) {
      case "+":
      case "-":
      case "*":
      case "/":
        expression += " " + String(item.name);
        break;
      default:
        expression += String(item.value);
    }
  });

  try {
    return Number(evaluate(expression));
  } catch (error) {
    console.error("Evaluating expression error:", error);
    expression = expression.slice(0, -1);
    try {
      return Number(evaluate(expression));
    } catch (innerError) {
      console.error("Error on removing symbol:", innerError);
      return 0;
    }
  }
};