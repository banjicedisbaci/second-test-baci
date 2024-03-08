// This function clear all the values
function clearScreen(): void {
    (document.getElementById("result") as HTMLInputElement).value = "";
}

// This function display values
function display(value: string): void {
    (document.getElementById("result") as HTMLInputElement).value += value;
}
// This function evaluates the expression and return result
function calculate(): void {
    let p = (document.getElementById("result") as HTMLInputElement).value;
    let q = eval(p);
    (document.getElementById("result") as HTMLInputElement).value = q;
}