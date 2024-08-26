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
    let start = 0;
    let end = 1;
    for(let j = 1; j<=n; j++){
        for(let i=1; i<=j; i++){
            if(i%2 === 0){
              document.write(start);
            }
            else{
              document.write(end);
            }
        }document.write("<br>") 
    }
}
const res = PrintPattern(5);
console.log(res);