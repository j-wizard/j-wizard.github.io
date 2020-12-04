

var $ = function (id) { return document.getElementById(id); };

/*var displayScores = function(){
    $("scores").innerHTML = "<h2>GPA</h2>"
    var th = "<th><td style = 'font-weight: bold'>Name</td><td style = 'font-weight: bold'>Score</td></th>";
    $("scores_table").innerHTML = th;
    
    for(var i = 0; i <names.length;i++){
        $("scores_table").innerHTML += "<tr><td>"+names[i]+"</td><td>"+scores[i]+"</td></tr>";
    }
}*/

/*var addScore = function(){
    var name = $("name").value;
    var score = $("score").value;
    names.push(name);
    scores.push(parseInt(score));
    
    $("name").value = "";
    $("score").value = "";
    displayResults();
}*/

var displayResults = function(){
    
    var credits = document.getElementById("credits").value;
    var lettera = document.getElementById("Grade1").value;
    var letterb = document.getElementById("Grade2").value;
    var gradea = 0.0;
    var gradeb = 0.0;
    
    if(lettera.toUpperCase()=="A"){
        gradea = 4.0;
    }
    else if(lettera.toUpperCase()=="B"){
        gradea = 3.0;
    }
    else if(lettera.toUpperCase()=="C"){
        gradea = 2.0;
    }
    else if(lettera.toUpperCase()=="D"){
        gradea = 1.0;
    }
    else if(lettera.toUpperCase()=="F"){
        gradea = 0.0;
    }
    
    if(letterb.toUpperCase()=="A"){
        gradeb = 4.0;
    }
    else if(letterb.toUpperCase()=="B"){
        gradeb = 3.0;
    }
    else if(letterb.toUpperCase()=="C"){
        gradeb = 2.0;
    }
    else if(letterb.toUpperCase()=="D"){
        gradeb = 1.0;
    }
    else if(letterb.toUpperCase()=="F"){
        gradeb = 0.0;
    }
    
    var avg = (gradea+gradeb)/2;
    
    var gpa = (avg*credits)/credits;
    
    
    $("results").innerHTML += "<h2>Results</h2>";
    $("results").innerHTML += "<p>GPA: " + gpa + "</p>";
}

window.onload = function () {
	$("calculate").onclick = displayResults;
};


