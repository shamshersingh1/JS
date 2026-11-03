// let string = 1+" ";
// let string1 = 1+" "+2+" ";
// let string2 = 1+" "+2+" "+3+" ";
// let string3 = 1+" "+2+" "+3+" "+4+" ";

// console.log(string);
// console.log(string1);
// console.log(string2);
// console.log(string3);
 let num=prompt("Enter Number");
 let arr=[];
 for(let i=1;i<=num;i++){
    let str="";
    for(let j=1;j<=i;j++){
        str=str+j+" ";
    }
    arr.push(str);
 }
 for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
 }
