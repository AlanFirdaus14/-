//membuat konstanta utk elemen HTML
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hour');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

//konstanta tujuan perhitungan
const countdown = "1 Jan 2023";

//membuat fungsi perhitungan countdown
function countdownApp() {
  //tujuan countdown
  const countdownDate = new Date(countdown);
  //mengambil tanggal dan waktu saat ini
  const currentDate = new Date();
  //menghitung jumlah detik
  const totalseconds = (countdownDate - currentDate) / 1000;
  //konversi detik ke menit, jam dan hari
  const days = Math.floor(totalseconds / 3600 / 24);
  const hour = Math.floor(totalseconds / 3600) % 24;
  const mins = Math.floor(totalseconds / 60) %60;
  const seconds = Math.floor(totalseconds) % 60;
  //menampilkan hasil konversi ke elemen HTML 
  //dalam bentuk String
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hour);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}
//membuat fungsi untuk memformat waktu yg sdh dikonversi
//fungsi ini menggunakan operator ternary utk mengecek
//apakah nilai hitung mundur kurang dari 10, jika iya
//maka akan ditambahkan angka nol (0) didepannya
function formatTime(time) {
  return time < 10? `0${time}` : time;
}
//memanggil fungsi countdownApp
countdownApp();
// mengatru interval waktu
setInterval(countdownApp, 1000);