
//     console.log("hello world is not so cool");
//     console.log("yeah you heard it right mr/miss");
//     alert("you are wrong as they say");

//     var age =prompt("what's is age please be serious")
// document.getElementById('somewhere').innerHTML=age;
// alert("hi guys");

function tellMeYourAge()
{
    var year  =prompt("Which year you were  born in  , My Friend  ");
     var getdate =new Date();
     var age =getdate.getFullYear();
     var days=(age -year) *365;
     var h2 = document.createElement(h2);
     var textAnswers=document.createTextNode("You are "+days+" days old");
     h2.setAttribute('id','days');
     h2.appendChild(textAnswers);
 document.getElementById('flex-box-result').appendChild(h2);
}
     
//    console.log(days);

function reset(){
    document.getElementById('days').remove();
}
