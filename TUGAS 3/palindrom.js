// let number = [5,5,6,5,7,6,5]
// let result = []

// for (i = 0; i < number.length; i++) {
//     console.log('i berjalan sebanya ' + i + ' kali')
//     for (x = 1; x < number.length; x++) {
//         console.log('x berjalan sebanya ' + x + ' kali')
//         if (number[i] == number[x]) { //Jika sama, maka kode ini dijalankan
//             console.log('Script Number sama Berjalan')
//             if (result.length == 0) { // Jika didalam result masih kosong, menggunakan kode ini
//                 result.unshift(number[i])
//                 result.push(number[x])
//                 // console.log('push ketika result kosong berjalan')
//             } else if (result.length > 0) { // jika di dalam result sudah ada isinya, menggunakan kode ini
//                 // console.log('masuk validasi result kosong')
//                 for (z = 0; z < result.length; z++) {
//                     if (number[i] == result[z]) {
//                         // console.log('masuk validasi kesamaan sebanyak ' + z + ' kali')
//                     } else if (number[i] != result[z]) {
//                         // console.log('masuk validasi TIDAK SAMA sebanyak ' + z + ' kali')
//                         //jika number i tidak sama dengan resul z
//                         let totalTrue = []
//                         let totalFalse = []
//                         for (c = 0; c < result.length; c++) {
//                             // console.log('masuk validasi penyisipan true / false berjalan sebanyak ' + c + ' kali')
//                             number[i] == result[c] ? totalTrue.push(1) : totalFalse.push(1)

//                         }
//                         if (totalFalse.length == result.length) {
//                             result.splice(result.length / 2, 0, number[i])
//                             // console.log('Script penyisipan berjalan')
//                         }
//                     }
//                 }

//             }
//         }else{
//             console.log('Script Else Number TIDAK sama')
//         }
//     }

// }

//     console.log(result)






let palindromGenerator= (value) => {
    return new Promise((resolve, reject) =>{
    let number = [...value]
    let result = []

    for (i = 0; i < number.length; i++) {
        console.log('terjadi ' +i + ' kali pengulangan');
        let totalTrue = []
        let totalFalse = []
        for (x = 0; x < number.length; x++) {
            number[i] == number[x] ? totalTrue.push(1) : totalFalse.push(1)
        }
        if (result.length === 0) {
            if(totalTrue.length > 1){
                result.unshift(number[i]) //masukkan number[i] sebanyak totalTrue BELUM
                result.push(number[i])
                console.log('push ANGKA KEMBAR saat Result 0 ' + number[i]);
                console.log(totalTrue.length)
            }else {
                result.push(number[i])
                console.log('puash ANGKA BEDA saat Result 0 ' + number[i]);
            }
        } else if (result.length > 0) {
            console.log('resulT > 0 berjalan angka ' + number[i] + ' dengan totalTrue ' + totalTrue.length)
            let totalTrue1 = []
            let totalFalse1 = []
            for(q = 0; q < result.length;q++){
                number[i] == result[q] ? totalTrue1.push(1) : totalFalse1.push(1)
            }//sisipkan totalTrue - totalTrue
            console.log('TOTAL true1 dan total true ' + totalTrue1.length+ ' ' + totalTrue.length );
            if(totalTrue1.length < totalTrue.length && totalTrue.length % 2 === 0){
                console.log('Menjalankan Validasi true1 < true');
                    result.unshift(number[i])
                    result.push(number[i])
                    console.log(totalTrue1.length);
                    console.log('totalTrue 1 berjalan ' + number[i])
            }else if(totalTrue.length > 1){ //Jika nilai dalam number ada yang sama dengan nilai dalam number lainnya // VALIDASI APAKAH DI RESULT SUDAH ADA ATAU BELUM
                let totalTrue2 = []
                let totalFalse2 = []
                console.log('total False 2 berjalan')
                // maka di cek apakah nilai yang true itu sudah ada dalam result atau belum
                for(z = 0; z < result.length;z++){ //Melakukan cek didlam result apakah ada nilai yang sama atau belum
                    number[i] == result[z] ? totalTrue2.push(1) : totalFalse2.push(1)
                }
                if(totalFalse2.length == result.length){
                    result.unshift(number[i])
                    result.push(number[i]) // ini perlua perbaikan juga
                    console.log('Berhasil melakukan push dan unshift ' + number[i] + ' dengan totalTrue ' + totalTrue.length)
                }else if(totalTrue1.length < totalTrue.length && totalTrue.length % 2 == 1) {
                    result.splice(result.length/2,0,number[i])
                    console.log('SPLICE berhasil');
                }else{
                    console.log('Continue berjalan')
                    continue
                }
            }else {
                result.splice(result.length/2,0,number[i])
                console.log('Berhasil Menyisipkan ')
                console.log(number[i])
            }
        }
    }
    resolve(result)
    reject(new Error('Error detected,'))
})
}

palindromGenerator([8,5,6,7,6,8,5])
.then((response) => {
    let ress =response.join('')
    console.log(ress)
})