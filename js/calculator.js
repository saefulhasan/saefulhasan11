const calculatorScreen = document.querySelector('.calculator-screen');
const calculatorKeys = document.querySelector('.calculator-keys');

calculatorKeys.addEventListener('click', event => {
  const target = event.target;

  // Cek apakah yang ditekan adalah tombol
  if (!target.matches('button')) return;

  // Ambil nilai dari tombol yang ditekan
  const keyValue = target.value;

  // Jika tombol AC ditekan
  if (keyValue === 'clear') {
    calculatorScreen.value = '';
    return;
  }

  // Jika tombol '=' ditekan
  if (keyValue === '=') {
    try {
      calculatorScreen.value = eval(calculatorScreen.value);
    } catch {
      calculatorScreen.value = 'Error';
    }
    return;
  }

  // Jika tombol 'Del' ditekan
  if (keyValue === 'Del') {
    deleteLast();
    return;
  }

  // Tambahkan nilai ke layar kalkulator
  calculatorScreen.value += keyValue;
});

// Fungsi untuk menghapus karakter terakhir
function deleteLast() {
  calculatorScreen.value = calculatorScreen.value.slice(0, -1);
}

