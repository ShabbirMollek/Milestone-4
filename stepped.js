const price = 3200 ;

if (price >= 7000){

//        10% discount   
       const discount = price * 10 / 100 ;
       const payAmount = price - discount ;
       console.log(payAmount);

}
else if (price>=5000){
                // 5% discount
                const discount =price* 5/100;
                const payAmount=price- discount;
                console.log(payAmount);

}
else if (price>=3000){
                // 3% discount
                const discount =price* 3/100;
                const payAmount=price- discount;
                console.log(payAmount);

}
else if (price>=2000){
                // 2% discount
                const discount =price* 2/100;
                const payAmount=price- discount;
                console.log(payAmount);

}
else {
                console.log(price);
}