// Pattern printing 
function printStars(){}
var n = 5;
var row = 0
while(row<n){
    var stars = ""
    var star = 5;
    for(var i = 1; i<=star;i++ ){
        console.log(stars);
        stars = stars + "* "
        star--;
    }
    row++;
}
