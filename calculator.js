function display(num){
    result.value +=num                      //to concate the value
}

function equal(){
   try{ result.value = eval(result.value) }  
   catch{
    result.value="error"
    setTimeout(() => {
        result.value=""
    }, 1000);
   }      //the evaluated result must show on the same input result
}

function clearall(){
    result.value=''
}

function back() {
    result.value=result.value.slice(0,-1)                        // slice is a string method to remove last element
}