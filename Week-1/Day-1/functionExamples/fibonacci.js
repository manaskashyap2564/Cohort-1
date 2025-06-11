// Fibonacci Series
function Fibonacci(n){
    var f1 = 0;
    var f2 = 1;
    for (let i = 1 ;  i <= n ; i++) {
        if (i === 1) {
            console.log(f1)
        }
        else if(i ===2){
            console.log(f2)
        }
        else{
            var f = 0
            f = f1+f2
            console.log(f)
            f1 = f2 
            f2 = f
        }
    }
}
Fibonacci(5)