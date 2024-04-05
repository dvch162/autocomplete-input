import { evaluate } from 'mathjs';
import { AutocompleteItem } from "../App";

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