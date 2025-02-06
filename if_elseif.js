const age=1;
const price=500;
if (age<=12){
    console.log("You Can Eat for FREE!")
}
else if(age>=60){
    // 50% discount
    
    const discount=price*50/100;
    const payAmount=price-discount;
    console.log(payAmount);
}
else if(age>=50){
    // 25% discount

    const discount=price*25/100;
    const payAmount=price-discount;
    console.log(payAmount);
}
else if(age>=40){
    // 10% discount

    const discount=price*10/100;
    const payAmount=price-discount;
    console.log(payAmount);
}

else{
    console.log("YOU NEED TO PAY FOR EAT!");
}