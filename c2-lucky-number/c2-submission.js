var n = 31052022;
// Write solution code here to find the lucky number
function sumDigits(n) {
    let sum = 0;
    let lucky=0;
    while (n!=0) {
      let digit = n % 10;
        sum += digit;
        n=parseInt(n/10) ;
    }
  
    while(sum!=0){
        let digit = sum % 10;
        lucky += digit;
        sum=parseInt(sum/10) ;

   }
   return lucky;
    
}

console.log(`Your Lucky Number is ${sumDigits(n)}`);
