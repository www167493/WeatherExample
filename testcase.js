var fin =(a,b)=>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number'){
        resolve(a+4)
      }else{
        reject('Arguements must be numbers')
      }
    },1500);
  })
}

fin(5).then((res)=>{
  console.log('Result',res);
  return fin(res)
}).then((rles)=>{
  console.log(`Result no 3: ${rles}`)
}).catch((err)=>{
  console.log(err)
})

//console.log(m)
//
// var goofy = new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//     resolve('Hey, It worked');
//    },2500);
// })
//
// goofy.then((b)=>{
//   console.log('Great', b)
// },(err)=>{
//   console.log('nope')
// })
