a = 1; b = 2; c = 2;
while (a < b < c) {
    console.log(a, b, c);
    t = a;
    a = b;
    b = t;
    c--;
}
// document.writeln("" + a + b + c);
console.log(a, b, c);