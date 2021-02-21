//Program To DO sederhana

// nambahin todo
// menghapus to do


let listTodo = []

let manageTodo = (methode, aktivitas) => {
    return new Promise((resolve, reject) => {
        if(typeof(methode) === 'string' && methode === 'creat' && typeof(aktivitas) === 'string'){
            listTodo.push(aktivitas)
            console.log('List berhasil di perbarui : \n' + listTodo)
            resolve(listTodo)
        }else if(typeof(methode) === 'string' && methode === 'done' && typeof(aktivitas) === 'string'){
            for(i =0; i < listTodo.length; i++){
                if(listTodo[i] == aktivitas){
                    listTodo.splice(i, 1)
                    console.log('List berhasil di perbarui  \n' + listTodo)
                    break
                }
            }
            resolve(listTodo)
        }else if(typeof(methode) === 'string' && methode === 'cek' && typeof(aktivitas) === 
        'string' && aktivitas === 'all'){
            console.log('Berikut To do list anda :')
            let result = console.log(listTodo)
            resolve(result)
        }else{
            reject(new Error('Something Wrong! please check again!'))
        }
    })
}

manageTodo('gr', 'jalan')
.then((response)=>{
        response.map((list) => {
            console.log(list)
            
        })
})
.catch((err) =>{
    console.log(err.message)
})