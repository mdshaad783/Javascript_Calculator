        var string = document.getElementById('screen').innerHTML;
        function myfun1(){
            string=string.replace(string ,'')
            document.getElementById("screen").innerHTML=string;
        }
        function myfun(paravalue){
            if(paravalue== 'd'){
                len = string.length;
                string = string.replace(string.charAt(len-1),'')
                document.getElementById("screen").innerHTML=string;
            }
            else if(paravalue == 'eq'){
                string=eval(string);
                document.getElementById("screen").innerHTML=string;

            }
            else{
            string = string + document.getElementById(paravalue).innerHTML;
            console.log(string)
            document.getElementById("screen").innerHTML = string;}
        }
    
function mysite(){
            window.location = "https://mdshaad783.github.io/mdshaad.github.io/"
        }
