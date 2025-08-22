/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

// membuat variabel pada elemen view
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

// membuat variabel untuk menyimpan email dan password
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

// menambah action kliuk pada button
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    // Mendapatkan nilai input dari email dan password pengguna dari form.
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;


    // Buat Logika perbandingan dengan kondisi:
    if (email == expectedEmail && password == expectedPassword) {
      goToHome();
    } else {
      showPopUp();
    }


    //Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
    //Jika tidak, maka panggil fungsi showPopUp().
});
