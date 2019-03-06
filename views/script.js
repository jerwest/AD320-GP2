
(function(){
    
    console.log('Hello world'); 
})();  



function validate(){
    
    if(document.myForm.weight.value == ""){
        
        alert("Please enter weight");
        //document.myForm.name.focus();
        return false;
    }
    return (true);
    
}