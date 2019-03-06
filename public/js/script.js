//function of validating activity entance form
window.onload = function(){
    
    var weight_label = document.getElementById('weight_label');
    var calIn_label = document.getElementById('calIn_label'); 
    var calBurn_label = document.getElementById('calBurn_label');  
    var hours_label = document.getElementById('sleep_label');
    
    var submit = document.getElementById('submit');
    var weight  = document.getElementById('weight').value;
    var calIn   = document.getElementById('calIn').value;
    var calBurn = document.getElementById('calBurn').value;
    var sleep   = document.getElementById('sleep').value;

    var inputs = [weight, calIn, calBurn, sleep];
    
    //var labels = [weight_label, calIn_label, calBurn_label, hours_label];

    var mandatoryHTML = " This field is mandatory";

    submit.addEventListener('click', validate, false); 
    
    function validate(){
       for(var i = 0; i< inputs.length; i++){
            if(inputs[i] === null || inputs[i] === ""){
                    alert(mandatoryHTML);
                break;
            }
        } 
    }
    
}

