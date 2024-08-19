
    //Functions

    function add(x, y){
        return x + y;
        
    }

    const subtract = (x, y) => {
        return x - y;
    }
    const divide = (x, y) => x / y;

    
   const e = add(1, 1);
    const f = add(1, 2);
    console.log(e);
    console.log(f);

    const g = subtract(5, 1);
    console.log(g);

    const h= divide(4, 2);
    console.loh(h);
    
    const addOne = (x) => x + 1;
    const i = addOne(2);
    console.log(i);

    
    //Default values
    const addValue=(a, b = 10) => {
        return a + b;
    }

    console.log(addValue(10)) // Prints 20
    console.log(addValue(10,20)) //prints 30

    console.log(addValue("20",undefined));
    console.log(addValue("20", null)) ;
