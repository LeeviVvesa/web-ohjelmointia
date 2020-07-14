function myFunction() 
{
    
    let person = prompt("Syötä nimesi", "????");
    let PERSON = person.toUpperCase();
    if (person != null) 
    {
        document.getElementById("demo").innerHTML = PERSON;
    }
}