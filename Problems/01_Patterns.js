// Pattern Problems 
// Problem - 01
function PrintPattern(n) {
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            document.write("*")
        }
        document.write("<br>")
    }
}
// const res = PrintPattern(5);
// console.log(res);

// Problem - 02
function PrintPattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
}
// const res = PrintPattern(5);
// console.log(res);

// Problem - 03
function PrintPattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(j);
        }
        document.write("<br>");
    }

}
// const res = PrintPattern(5);
// console.log(res);

// Problem - 04
function PrintPattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(i);
        }
        document.write("<br>");
    }

}
// const res = PrintPattern(5);
// console.log(res);

// Problem - 05
function PrintPattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= i; j--) {
            document.write("*")
        }
        document.write("<br>");
    }

}
// const res = PrintPattern(5);
// console.log(res);

// Problem - 06
function PrintPattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i + 1; j++) {
            document.write(j);
        }
        document.write("<br>");
    }

}
// const res = PrintPattern(5);
// console.log(res);

// Problem - 07
function PrintPattern(n) {
    for (let i = 0; i < n; i++) {
        for (let s = 0; s < n - i; s++) {
            document.write("&nbsp")
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            document.write("*")
        }
        document.write("<br>");
    }

}
// const res = PrintPattern(6);
// console.log(res);

// Problem - 08
function PrintPattern(n) {
    for (let i = 0; i < n; i++) {
        for (let s = 0; s < i; s++) {
            document.write("&nbsp")
        }
        for (let j = 0; j < n - i; j++) {
            document.write("* ")
        }

        document.write("<br>");
    }

}
// const res = PrintPattern(6);
// console.log(res);

// Problem - 09
function PrintPattern(n) {
    for (let i = 0; i < n; i++) {
        for (let s = 0; s < n - i; s++) {
            document.write("&nbsp")
        }
        for (let j = 0; j <= i; j++) {
            document.write("* ")
        }
        document.write("<br>");
    }
    for (let i = 0; i < n; i++) {
        for (let s = 0; s <= i; s++) {
            document.write("&nbsp")
        }
        for (let j = 0; j < n-i; j++) {
            document.write("* ")
        }

        document.write("<br>");
    }

}
// const res = PrintPattern(5);
// console.log(res);

// Problem - 10
function PrintPattern(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            document.write("* ")
        }
        document.write("<br>");
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-i; j++) {
            document.write("* ")
        }

        document.write("<br>");
    }

}
// const res = PrintPattern(5);
// console.log(res);

// Problem - 11
function PrintPattern(n) {
    let start = 1;
    for(let i =0; i<n; i++){
        if(i%2 == 0){
            start=1;
        }
        else{
            start=0;
        }
        for(let j=0; j<=i; j++){
            document.write(start)
            start =1-start;
        }
        document.write("<br>")

    }
    
}
// const res = PrintPattern(5);
// console.log(res);

// Problem - 12
function PrintPattern(n) {
   for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        document.write(j);
    }
    for(let s=1; s<=n*2-(2*i); s++){
        document.write("_");
    }
    for(let k=i; k>=1; k--){
        document.write(k);
    }
    document.write("<br>")
   }
    
}
// const res = PrintPattern(4);
// console.log(res);

// Problem - 13
function PrintPattern(n) {
    let sum = 0;
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            sum=sum +1;
            document.write(sum, " ");

        }
     document.write("<br>")
    }
     
 }
//  const res = PrintPattern(5);
//  console.log(res);

// Problem - 14
function PrintPattern(n) {
    let str ="";
    for(let i=1; i<=n; i++){
     for(let j=65; j<65 + i; j++){
        str = String.fromCharCode(j);
        document.write(str);
     }
     document.write("<br>")
    }
     
 }
//  const res = PrintPattern(5);
//  console.log(res);

// Problem - 15
function PrintPattern(n) {
    let str ="";
    for(let i=1; i<=n; i++){
     for(let j=65; j<=70-i; j++){
        str = String.fromCharCode(j);
        document.write(str);
     }
     document.write("<br>")
    }
     
 }
//  const res = PrintPattern(5);
//  console.log(res);

// Problem - 16
function PrintPattern(n) {
    let str ="";
    for(let i=1; i<=n; i++){
     for(let j=1; j<=i; j++){
        str = String.fromCharCode(64+i);
        document.write(str);
     }
     document.write("<br>")
    }
     
 }
//  const res = PrintPattern(5);
//  console.log(res);

// Problem - 17
function PrintPattern(n) {
    let str ="";
    for(let i=1; i<=n; i++){
     for(let s=n-i; s>=1; s--){
        document.write("&nbsp");
     }
     for(let j=65; j<65+i; j++){
        str = String.fromCharCode(j);
        document.write(str)
     }
     for(let k=65+i; k>=65; k--){
        str = String.fromCharCode(k);
        document.write(str);
     }
     document.write("<br>")
    }
     
 }
//  const res = PrintPattern(4);
//  console.log(res);

// Problem - 10
function PrintPattern(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            document.write("*")
        }
        for(let s = 2; s<n*2-(2*i); s++){
            document.write("_")
        }
        for (let j = i; j >=0; j--) {
            document.write("*")
        }
        document.write("<br>");
    }
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n-i; j++) {
            document.write("*")
        }
        for(let s =0; s<i*2; s++){
            document.write("_")
        }
        for (let j = 0; j< n-i; j++) {
            document.write("*")
        }

        document.write("<br>");
    }

}
const res = PrintPattern(5);
console.log(res);