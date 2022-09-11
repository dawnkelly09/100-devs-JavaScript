//Create a function that grabs the number of snacks from the input and tells you to stop that many times

//event listener for the input button click
document.querySelector("#help").addEventListener('click', stopSnacking)


function stopSnacking (){
    //get value from the input
    let numOfSnacks = Number(document.querySelector('input').value)
   //reset the innerText to be empty each time this function is called
    document.querySelector('#stops').innerText = ""
    //while loop 
    for (let i = 1; i <= numOfSnacks; i++){
        document.querySelector('#stops').innerText += " STOP!"
    }    
}

//call the function
numOfSnacks()
