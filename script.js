// This function clears all the values
function clearScreen(): void {
    (document.getElementById("result") as HTMLInputElement).value = "";
}

// This function displays values
function display(value: string): void {
    (document.getElementById("result") as HTMLInputElement).value += value;
}

// This function evaluates the expression and returns result
function calculate(): void {
    let p = (document.getElementById("result") as HTMLInputElement).value;
    let q = eval(p); // Note: Using eval can be unsafe if you're dealing with unknown or user-provided data
    (document.getElementById("result") as HTMLInputElement).value = q;
}