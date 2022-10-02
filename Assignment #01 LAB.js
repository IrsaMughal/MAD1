// QSTN 1

 let args=[2,3,1,6,7];
 let j=0;
 let x=parseInt(args[0]);
 let y=parseInt(args[1]);
 for(let i=0;i<y;i++)
 {
     m=args[1]
 }
 console.log((y+1),"kth digit from the last is="+j); 
 //QSTN 2
 

var value = 23617;
sum = value.toString().split('').map(Number).reduce(function(a,b){return a+b},0);
console.log(sum);
//QSTN 3
 let numStr = [2,3,6,1,7]; 
   let sum = 0; 
   for (let i = 0; i < numStr.length; i++) { 
     if (numStr[i] % 2 === 0){  
     sum = sum + numStr[i]; 
     } 
   } 
  
  console.log(sum);
  //QSTN 4
   for(let i=0;i<=10;i++) 
 { 
     console.log("square"+(i*i)); 
     console.log("cube"+(i*i*i)); 
 } 
//QSTN 6
 const num = Math.ceil(Math.random() * 10); 
   
  let gnum=4; 
  if (gnum == num) 
    console.log('Matched'); 
   else 
    console.log('Not matched, the number was '+gnum);
//QSTN 7

let check =(arr)=> {
    if (arr.length >= 2) {
        if (arr[0] == 10 || arr[arr.length - 1] == 10) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
console.log(check([2,8,11,18,20,22,25,30]));
//QSTN 8

  
 
 let sortString = (str) => {
    let sortedStr = str.split("").sort().join("");
    return sortedStr;
}
console.log(sortString("COMSATS"));
