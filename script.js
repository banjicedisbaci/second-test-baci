function clearScreen(): void {
    (document.getElementById("result") as HTMLInputElement).value = "";
function display(value: string): void {
    (document.getElementById("result") as HTMLInputElement).value += value;
function calculate(): void {
    var p = (document.getElementById("result") as HTMLInputElement).value;
    var q = eval(p);
    (document.getElementById("result") as HTMLInputElement).value = q;