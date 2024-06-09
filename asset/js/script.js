
const precioinicial = 400000;
let cantidad = 0;
let valortotal = 0;
let interval;

document.querySelector('#precioinicial').innerHTML = precioinicial;
document.querySelector('#cantidad').innerHTML = cantidad;
document.querySelector('.valortotal').innerHTML = valortotal;

function StartCountdown() {
       
        if (cantidad > 0){ 
            cantidad = cantidad - 1;
            valortotal = cantidad * precioinicial;
            document.querySelector('#cantidad').innerHTML = cantidad;
            document.querySelector('.valortotal').innerHTML = valortotal;}
            else{
                clearInterval(interval)
            }  
            
}

