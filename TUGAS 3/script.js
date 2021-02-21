// objek Market



let sayuran = [
    {nama : 'toge',     price : 1000,   qty : 10}, 
    {nama : 'kangkung', price : 1200,   qty : 10},
    {nama : 'bayam',    price : 1200,   qty : 5}, 
    {nama : 'tempe',    price : 900,    qty : 7}, 
    {nama : 'nangka',   price : 500,    qty : 8},
    {nama : 'kecambah', price : 1400,   qty : 12},
    {nama : 'jengkol',  price : 1000,   qty : 10},
    {nama : 'singkong', price : 1000,   qty : 10}
]

const warungSayur = (methode, jenis, qty) => {
    return new Promise((resolve, reject) => {
        
        let data = sayuran.find((sayur)=> {
            return sayur.nama === jenis
        })

        if(methode === 'buy' || methode === 'Buy' || methode === 'BUY'){
            let result = () => {
                let letak = sayuran.findIndex(sayur => {
                    return sayur === data
                })
                sayuran.splice(letak,1,{nama : jenis,   price: data.price,   qty: 10-qty })
                return sayuran
            }
            resolve(result)
        }else {
            reject(new Error('Duh, ada yang error nih!'))
        }
    })
}


warungSayur('buy', 'toge', 1)
.then((result) => {
   console.log(`Pembelian Berhasil, sayuran yang tersisa adalah : `)
   console.log(result())
})
.catch((err) => {
    console.log(err.message)
})















// let sayuran = [
//     {nama : 'toge',     price : 1000,   qty : 10}, 
//     {nama : 'kangkung', price : 1200,   qty : 10},
//     {nama : 'bayam',    price : 1200,   qty : 5}, 
//     {nama : 'tempe',    price : 900,    qty : 7}, 
//     {nama : 'nangka',   price : 500,    qty : 8},
//     {nama : 'kecambah', price : 1400,   qty : 12},
//     {nama : 'jengkol',  price : 1000,   qty : 10},
//     {nama : 'singkong', price : 1000,   qty : 10}
// ]

// let sayur = 'toge'
// let buy = sayuran.find( (item)=> {
//     return item.nama === sayur
// })
// console.log(buy);

// let letak = sayuran.findIndex(sayur => {
//     return sayur === buy
// })
// console.log(letak);