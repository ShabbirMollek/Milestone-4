const computer ={
                brand: 'lenevo',
                price : 35000 ,
                processor: 'intel',
                hdd: '512gb',
                'monitor': 'hp'
}
// console.log(computer);

const keys = Object.keys(computer);
console.log(keys);
// const values = Object.values(computer);
// console.log(values);

for (const key of keys){
                console.log(key, " :" , computer[key]);
}