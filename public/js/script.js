    
    var submit = document.getElementById('submit');
    var weight  = document.getElementById('weight');
    var calIn   = document.getElementById('calIn');
    var calBurn = document.getElementById('calBurn');
    var sleep   = document.getElementById('sleep');

    //var inputs = [weight, calIn, calBurn, sleep];
    

    var mandatoryHTML = " Invalid entry. Must be values between 50 and 4000";

    weight.addEventListener('change', function(){
        if(activityForm.weight.value <50){
                   alert('Weight must be a number between 50 and 500');
        }
    }); 
    
    calIn.addEventListener('change', function(){
        if(activityForm.calIn.value <50){
                   alert('Calories consumed values must be in 0 -  5000 range');
        }
    }); 
        
    calBurn.addEventListener('change', function(){
        if(activityForm.calBurn.value <50){
                   alert('Calories burned values must be in 0 -  2000 range');
         }
    }); 
        
    sleep.addEventListener('change', function(){
        if(activityForm.sleep.value <50){
                   alert('Daily sleep amount must in 0 - 24 hrs range');
         }
    }); 
    

