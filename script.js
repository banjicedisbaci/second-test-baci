// CalculatorFunctions.tsx

interface CalculatorFunctionsProps {
    value: string;
}

// This function clear all the values
const clearScreen = (): void => {
    document.getElementById("result")!.value = "";
}

// This function display values
const display = (value: string): void => {
    document.getElementById("result")!.value += value;
}
// This function evaluates the expression and return result
const calculate = (): void => {
    const p: string = document.getElementById("result")!.value;
    const q: number = eval(p);
    document.getElementById("result")!.value = q.toString();
}