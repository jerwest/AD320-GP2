window.onload = function(){

var submit = document.getElementById('submit');
    var weight  = document.getElementById('weight');
    var calIn   = document.getElementById('calIn');
    var calBurn = document.getElementById('calBurn'); 
    var type = document.getElementById('type');
    var time = document.getElementById('length');
    var sleep   = document.getElementById('sleep');

function dataCheck(){
    

    //var inputs = [weight, calIn, calBurn, sleep];


    weight.addEventListener('change', function(){
        if(activityForm.activity_weight.value <50){
                   alert('Weight must be a number between 50 and 500');
            
        }
        return false;
    });

    calIn.addEventListener('change', function(){
        if(activityForm.calIn.value <50){
                   alert('Calories consumed values must be in 50 -  5000 range');
            return false;
        }
    });

    calBurn.addEventListener('change', function(){
        if(activityForm.calBurn.value <50){
                   alert('Calories burned values must be in 50-  2000 range');
         }
    });

    sleep.addEventListener('change', function(){
        if(activityForm.sleep.value >24 || activityForm.sleep.value <0){
                   alert('Daily sleep amount must in 0 - 24 hrs range');
            return false;
         }
    });   
     
    return false;     
} ;
//calling data validation on page
dataCheck();

function validate(){
    if(dataCheck() == false){
           alert("Please enter valid values");
    }
};

//function for node.js to pop up message to user about error
function alertError(){
    
    alert('Please go back and enter correct value');
}


//-------------------ADDING EACH ENTERED ROW TO THE SIDE CONTAINER-----

var inputArray = [weight, calIn, calBurn,sleep, type, time ];

inputArray.forEach(function(element){
    element.addEventListener('change', function(){
        
        outputField.style= "background: #FF7F50; margin: 0, auto; padding: 10px; margin-right: 5px; font-weight: 500; color: white; border : 1px solid white; border-radius: 4px;"
       // console.log(element.value);
        
        switch(element){
                
            case weight : 
                //display(weight);
                outputField.innerHTML ="Today you weight: " + weight.value + " lbs";
                break;
                
            case calIn:
                //display(weight);
                outputField.innerHTML ="Today you weight: " + weight.value + "<br>Calories you consumed: " + calIn.value; 
                //display(cal_intake);
                break;
                
                case calBurn:
                //display(cal_use);
                outputField.innerHTML ="Today you weight: " + weight.value + "<br>Calories you consumed: " + calIn.value + "<br> Calories you used: " + calBurn.value; 
                break;
                
                case sleep:
                //display(sleep);
                outputField.innerHTML = "Today you weight: " + weight.value + " lbs"+ "<br>Calories you consumed: " + calIn.value+ "<br> Calories you used: " + calBurn.value + "<br>You slept " + sleep.value + " hours";
                
                case type:
                //display(workout_type);
                outputField.innerHTML = "Today you weight: " + weight.value + " lbs"+ "<br>Calories you consumed: " + calIn.value+ "<br> Calories you used: " + calBurn.value + "<br>You slept " + sleep.value + "<br>Workout : " + type.value; 
                break;
                
                case time:
                //display(time);
                outputField.innerHTML = "Today you weight: " + weight.value + " lbs"+ "<br>Calories you consumed: " + calIn.value+ "<br> Calories you used: " + calBurn.value + "<br>You slept " + sleep.value +"<br>Workout : " + type.value + "<br>Active time "+ time.value; 
                break;             
            
        }
        
       
    });
})
}();