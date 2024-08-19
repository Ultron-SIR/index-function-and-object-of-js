
let Myname="manish";
let age="22";
const awesome="True"

console.log(Myname);
console.log(age);
console.log(awesome);

Myname="Manish Kharel 123True";
age=22.5
Myname=100
console.log("Myname");

let webtechnology;

console.log(webtechnology);

webtechnology=900;
console.log(webtechnology);

webtechnology= null;
console.log(webtechnology);

webtechnology= undefined;
console.log(webtechnology);



const a = 100;
const b = 222;

const  c= a+b;  
console.log(c)
const d = b-a; 
console.log(d)
const e = a*b; 
console.log(e)
const f = b/a;  
console.log(f)
const g = a%b;  
console.log(g)  

const h ="hello";
const j = "world";
const k =h+j;
console.log(k)

const i = a+h;
console.log(i)

const l = undefined+h;
console.log(l)

console.log(1+"1")  


let m = 5;
m=m+99;
console.log(m);

/**
 * logical operator
 */

let n =10;
const o ="10";
const r=n==0;
console.log(r)
const s= n===o;
console.log(s)

const t = n !== o;
console.log(t)

n=10
const v = 20;
console.log(n>v);   
console.log(n<v);   
console.log(n>=v);  
console.log(n<=v);  

/**
 * logical operator
 */
let w=true;
let x=false;
const p=w && x; 
const q=w || x; 
console.log(p);
console.log(q);

const y = !w;
console.log(y)

console.log(!false); 
console.log(!true); 
console.log(!100); 
console.log(!null); 
console.log(!undefined);   

/*
conditional statements
*/
let aa=100;
const ab= 50;
//If Elsestatements
if (aa>ab){
    console.log("a is greater");
}else{
    console.log("ab is greater");
}

//switch case statements
aa=""
switch(aa){
    case 100:
        console.log("value is 100")
        break;

        case 200:
            console.log("value is 200");
            break;
            default:
                console.log("value is nothing");
                break;
    }

    /**
     * Arrays 
     */
    const ac=["Ram", "HAri", "man"];
    console.log(ac);

    console.log(ac[0]);
    console.log(ac[1]);

    /**
     * loops
     */

    //for loop
    for(leti=0; i<ac.length; i++){
        console.log(i);
        console.log(ac[ i ]);
    }

    //while loop
    let ad =1;
    while (ad<10){
        console.log("the value of ad is");
        console.log(ad);
        ad++;
    }

    //do while
    let ae = 1
    do{
        console.log("value of ae is");
        console.log(ae);
        ae++
    }while (ae < 1 && ae <10);



 


