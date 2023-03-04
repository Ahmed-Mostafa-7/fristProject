let cars=['marcides' , 'bmw' , 'honda']
let models=['2020' , '2021' , '2022']
let colors=['red' , 'blue' , 'black']

for (let s = 0; s < cars.length; s++) {
    
    console.log(`car: ${cars[s]}`)
    for (let a= 0; a < models.length; a++) {
        console.log(`model: ${models[a]}`)
    }
    for (let d= 0; d < colors.length; d++) {
        console.log(`color: ${colors[d]}`)
    }
    console.log("________________$__________________")
}

let dollar=document.getElementById('dollar')
let bond=document.getElementById('bond')


dollar.onkeyup=function(){
    bond.value = dollar.value *30.5;
    dollar.style.color="red";
}

bond.onkeyup=function(){
    dollar.value = bond.value /30.5;
    bond.style.color="red";
}


