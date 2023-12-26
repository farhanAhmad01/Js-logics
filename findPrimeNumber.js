function Prime(num){
    let prime ;
    if(num === 1){
        return console.log("it not valid")
    }else{
       for(let i =2 ; i < num;i++){
        if(num%i==0){
            prime = false
        }else{
            prime = true
        }
       }
    }
    return prime
}
console.log(Prime(9))