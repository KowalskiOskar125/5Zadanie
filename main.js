document.write("<h1>1. x = a / b</h1>");

let a = 10;
let b = 2;

document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");

if (b == 0) {
    document.write("Nie można obliczyć wyniku<br>");
} else {
    document.write("x = " + a / b + "<br>");
}


document.write("<h1>2. x = a / b + c / d</h1>");

a = 10;
b = 2;
let c = 8;
let d = 4;

document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");
document.write("c = " + c + "<br>");
document.write("d = " + d + "<br>");

if (b == 0 || d == 0) {
    document.write("Nie można obliczyć wyniku<br>");
} else {
    document.write("x = " + (a / b + c / d) + "<br>");
}


document.write("<h1>3. x = (a + 6) / (b - 4)</h1>");

a = 10;
b = 6;

document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");

if (b - 4 == 0) {
    document.write("Nie można obliczyć wyniku<br>");
} else {
    document.write("x = " + ((a + 6) / (b - 4)) + "<br>");
}


document.write("<h1>4. Liczba parzysta</h1>");

a = 8;

document.write("a = " + a + "<br>");

if (a % 2 == 0) {
    document.write("Liczba jest parzysta<br>");
} else {
    document.write("Liczba jest nieparzysta<br>");
}


document.write("<h1>5. Podzielność liczb</h1>");

a = 10;
b = 2;

document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");

if (b == 0) {
    document.write("Nie można dzielić przez 0<br>");
} else if (a % b == 0) {
    document.write("a jest podzielne przez b<br>");
} else {
    document.write("a nie jest podzielne przez b<br>");
}


document.write("<h1>6. Liczba dodatnia, ujemna lub 0</h1>");

a = -5;

document.write("a = " + a + "<br>");

if (a > 0) {
    document.write("Liczba jest dodatnia<br>");
} else if (a < 0) {
    document.write("Liczba jest ujemna<br>");
} else {
    document.write("Liczba jest równa 0<br>");
}


document.write("<h1>7. Największa z trzech liczb</h1>");

a = 5;
b = 12;
c = 8;

document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");
document.write("c = " + c + "<br>");

if (a >= b && a >= c) {
    document.write("Największa liczba: " + a + "<br>");
} else if (b >= a && b >= c) {
    document.write("Największa liczba: " + b + "<br>");
} else {
    document.write("Największa liczba: " + c + "<br>");
}


document.write("<h1>8. Liczby w kolejności rosnącej</h1>");

a = 9;
b = 3;
c = 7;

document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");
document.write("c = " + c + "<br>");

let liczby = [a, b, c];

liczby.sort((a, b) => a - b);

document.write("Kolejność rosnąca: " + liczby[0] + ", " + liczby[1] + ", " + liczby[2]);
