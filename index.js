// definition of arr 
let coins = "000010101".split('')

//coin flipper function
const fliper = arr => {
    //temporary arrays
    let t1 =[], t2 =[];
    let counter1 = 0, counter2 = 0;

    // looop
    arr.forEach((element, index) => {

        //creating possible solution
        t1[index] = index % 2
        t2[index] = (index + 1) % 2

        // adding 1 if different 
        if(t1[index] != element) counter1++
        if(t2[index] != element) counter2++
    })

    if(counter1 > counter2) return t2

    return t1
}

console.table(fliper(coins))
