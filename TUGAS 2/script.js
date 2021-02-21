const getMonth = (callback) => {
    setTimeout(() =>{
        let error = false
        month = ['January', 'February', 'March', 'April', 
        'May', 'Juni', 'July', 'August','September', 'October', 'November', 'Desember'];
        if(!error){
            callback(null, month)
        }else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 1000)
}


const cetak = (err, month) =>{
    if(!err){
        month.map((item) => {
            console.log(item)
        })
    } else {
        console.log(err.message)
    }
}

getMonth(cetak)


// getMonth(() => {
//     if(null){
//         month.map((item) => {
//             console.log(item)
//         })
//     }
//     })



// const result = (null, (month) => {
//     if(null){
//         month.map(item => {
//             console.log(item)
//         })
//     }
// })


// getMonth(result);