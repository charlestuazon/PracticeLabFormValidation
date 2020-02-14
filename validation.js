function validateCheckbox(){
    var checkboxes = document.getElementsByName("check");
    var a = 0;

    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            a++;  
    }  
    if(a<1)  
    {  
        alert("You need to check at least one of the choices.");  
    } 
    
}

function validateDropbox(){
   
        var dropbox = document.getElementsByName("eType");
        var selected = dropbox.options[dropbox.selectedIndex].value;

        var selected = dropbox.options[dropbox.selectedIndex].text;
        if(selected==0)
        {
            alert("Choose one or more");
        }
}

function validateTextbox() {
    if (document.getElementById("1").value == "") {
        alert("Fill up the Event Title");
    } 
    else if (document.getElementById("2").value == "") {
        alert("Fill up the Date.");
    }
    else if (document.getElementById("3").value == "") {
        alert("Fill up the Date.");
    }
    else if (document.getElementById("4").value == "") {
        alert("Fill up the posting dates.");
    }

}

function validate(){
    var y1=document.getElementById("you").value;
    var y2=document.getElementById("Events").value;
    var x1=document.getElementById("1").value;
    var x2=document.getElementById("2").value;
    var x3=document.getElementById("3").value;
    var x4=document.getElementById("4").value; 
    if(y1|y2|x1|x2|x3|x4 !=""){
    alert("Successful Validation");
        alert("Event Type"+" "+y2+" \n"+" Event Title is"+" "+x1+"\n "+"Event dates"+" "+x2+" "+" To "+x3+" \n"+"Posting Dates: "+" "+x4)
        y1=document.getElementByName("you").value="";
        y2=document.getElementById("Events").value="";
        x1=document.getElementById("1").value="";
        x2=document.getElementById("2").value="";
        x3=document.getElementById("3").value="";
        x4=document.getElementById("4").value="";
    }
    else{
    validateTextbox();
    validateCheckbox();
    validateDropbox();
    } 
}