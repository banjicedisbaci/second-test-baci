// This function clear all the values
function clearScreen(): void {
    document.getElementById("result")!.value = "";
}
// This function display values
function display(value: string): void {
    document.getElementById("result")!.value += value;
}
// This function evaluates the expression and return result
function calculate(): void {
    var p = document.getElementById("result")!.value;
    var q = eval(p);
    document.getElementById("result")!.value = q;
}