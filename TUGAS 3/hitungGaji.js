function hitungGaji(nama, gaji, bln, tnjgn) {
    console.log('================================');
    console.log('Nama Karyawan: ' + nama);
    console.log('Gaji Pokok: ' + gaji);
    let tunjangan = 500000;
    if (tnjgn == true) {
        console.log('Tunjangan: ' + tunjangan);
    } else {
        console.log('Tunjangan: -');
    }
    let bpjs = gaji * 3 / 100;
    let pajak = gaji * 5 / 100;
    console.log('BPJS: ' + bpjs);
    console.log('Pajak:' + pajak);
    console.log('================================');
    let gajiBersih = gaji - bpjs - pajak;
    if (tnjgn == true) {
        console.log('Gaji bersih: ' + (gajiBersih + tunjangan));
    } else {
        console.log('Gaji bersih: ' + gajiBersih);
    }

    console.log('================================');
    let totGaji = gajiBersih * bln;
    if (tnjgn == true) {
        console.log('Total Gaji: ' + (gajiBersih + tunjangan) * bln);
    } else {
        console.log('Total Gaji: ' + gajiBersih * bln);
    }
}

hitungGaji('shinta', 1500000, 2, true); // <<< Ganti disini