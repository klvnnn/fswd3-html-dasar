//Jankenkon Arena
var ask = true;
while (ask) {
    //Pilihan Player
    var user = prompt('Pilih : Batu, Gunting, Kertas');

    //Pilihan Komputer
    var com = Math.random();

    if (com < 0.34) {
        com = 'Batu';
    } else if (com >= 0.34 && com < 0.67) {
        com = 'Gunting';
    } else {
        com = 'Kertas';
    }

    var hasil = '';

    //Rules
    if ( user == com){
        hasil = 'DRAW';
    } else if (user == 'Batu') {
        hasil = (com == 'Gunting') ? 'WIN!' : 'LOSE!';
    } else if (user == 'Gunting') {
        hasil = (com == 'Batu') ? 'LOSE!' : 'WIN!';
    } else if (user == 'Kertas') {
        hasil = (com == 'Gunting' ? 'LOSE!' : 'WIN!');
    } else {
        hasil = 'Pilihanmu Tidak Ada !!'
    }

    alert ('Kamu Memilih : ' + user + ' dan Komputer Memilih : ' + com + '\nMaka Hasilnya: Kamu ' + hasil);
}