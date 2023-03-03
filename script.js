let boo1 = true;
let num1 = 0;

let boo2 = true;
let num2 = 0;

let boo3 = true;
let num3 = 0;

butt1.addEventListener("click",()=>{
    num1++
    // console.log(num1)
    let Num = num1 + num2 + num3
    butt1.innerHTML = "Pressed " + num1 + " times"
    counter.innerHTML = "The buttons have been pressed " + Num + " times"
    boo1 =! boo1
    if(boo1 == false){
        document.body.style.backgroundColor = "rgb(230, 230, 250)"
    }else{
        document.body.style.backgroundColor = "rgb(250, 250, 250)"
    }
})

butt2.addEventListener("click",()=>{
    num2++
    // console.log(num2)
    let Num = num1 + num2 + num3
    butt2.innerHTML = "Pressed " + num2 + " times"
    counter.innerHTML = "The buttons have been pressed " + Num + " times"
    boo2 =! boo2
    if(boo2 == false){
        aDiv.style.backgroundColor = "rgb(230, 200, 200)"
        aDiv.style.borderRadius = "10px"
        aDiv.style.borderStyle = "solid"
        aDiv.style.borderColor = "rgb(135, 197, 189)"
        aDiv.style.borderWidth = "5px"
        aDiv.style.width = "22%"
    }else{
        aDiv.style.backgroundColor = "rgb(135, 197, 189)"
        aDiv.style.borderRadius = "0px"
        aDiv.style.borderWidth = "0px"
        aDiv.style.width = "20%"
    }
})

butt3.addEventListener("click",()=>{
    num3++
    // console.log(num3)
    let Num = num1 + num2 + num3
    butt3.innerHTML = "Pressed " + num3 + " times"
    counter.innerHTML = "The buttons have been pressed " + Num + " times"
    boo3 =! boo3
    if(boo3 == false){
        para.append("Stupid! Fool! ")
    }else{
        para.append("Weak! Suck! ")
    }
})
