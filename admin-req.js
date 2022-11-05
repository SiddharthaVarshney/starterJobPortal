var hrs_slider = document.getElementById("hrsRange");
var hrs_output = document.getElementById("hrsRangeValue");

hrs_output.innerHTML = hrs_slider.value;
hrs_slider.oninput = function(){
    hrs_output.innerHTML = this.value;
}

var pay_slider = document.getElementById("payRange");
var pay_output = document.getElementById("payRangeValue");

pay_output.innerHTML = pay_slider.value;
pay_slider.oninput = function(){
    pay_output.innerHTML = this.value;
}

var exp_slider = document.getElementById("expRange");
var exp_output = document.getElementById("expRangeValue");

exp_output.innerHTML = exp_slider.value;
exp_slider.oninput = function(){
    exp_output.innerHTML = this.value;
}