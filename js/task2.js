let elemResult = document.getElementById('numbers');
for (let i = 100; i >= 0; i -= 10) {
  elemResult.innerHTML += 'Число: <b>' + i + '</b><br>';
}
