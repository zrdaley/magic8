var SVGNameSpace = "http://www.w3.org/2000/svg";
var response = new XMLHttpRequest();


function shake(){
    response.open("GET", "/response", true);
    response.send();
}

response.onreadystatechange = function(){
    if(response.readyState == 4 && response.status == 200){
        
        str = response.responseText;
        str = splitAfterXWords(str, 3);

        document.getElementById("ans1").innerHTML = str[0];
        document.getElementById("ans2").innerHTML = str[1];

    }   
};

function splitAfterXWords(to_split, words){
    regex = new RegExp("(([\\s;:!,.?\"'’]*[^\\s]+){" + words + "})(.*)")
    result = regex.exec(to_split)
    return result ? [result[1], to_split.substr(result[1].length)] : [to_split, '']
}



