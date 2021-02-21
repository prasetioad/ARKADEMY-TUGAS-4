// const cekHariKerja = (day) =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             const dataDay = ['senin','selasa','rabu','kamis','jumat']
//             let cek = dataDay.find((item)=>{
//                 return item === day
//             })
//             if(cek){
//                 resolve('Sekarang hari '+ cek +',adalah hari kerja!')
//             }else{
//                 reject(new Error('Hari ini bukan hari kerja!'))
//             }
//         },3000)
//     })
// }

// cekHariKerja('senin')
// .then((cek)=>{
//     console.log(cek)
// })
// .catch((err) =>{
//     console.log(err.message)
// })



const cekHariKerja = (day) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve('Sekarang hari '+ cek +',adalah hari kerja!')
            }else{
                reject(new Error('Hari ini bukan hari kerja!'))
            }
        },3000)
    })
}

try{
    cekHariKerja('minggu')
    .then((cek) => {
        console.log(cek)
    })
}catch (err) {
    console.log(err.message)
}

console.log('Diluar dari try Catch')