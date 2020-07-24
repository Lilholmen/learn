document.write('<div class="loop"><h3>Цикл for:</h3>');
for (let i = 1; i < 16; i++) {
    document.write("Число " + i + ": " + ((i % 2 === 0) ? "" : "не ") + "четное<br>");
}
document.write("</div>");
i = 1;
document.write('<div class="loop"><h3>Цикл while:</h3>')
    while (i < 16) {
        document.write("Число " + i + ": " + ((i % 2 === 0) ? "" : "не ") + "четное<br>");
        i++;
    }
document.write("</div>");
i = 1;
document.write('<div class="loop"><h3>Цикл do-while:</h3>')
    do {
        document.write("Число " + i + ": " + ((i % 2 === 0) ? "" : "не ") + "четное<br>");
        i++;
    } while (i < 16);
document.write("</div>");