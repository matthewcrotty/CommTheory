var path = window.location.pathname;
var page = path.split("/").pop();

$(function(){
    switch(page){
        case "index.html":
            document.getElementById("1").style.fontWeight = "Bold";
            break;
        case "body1.html":
            document.getElementById("2").style.fontWeight = "Bold";
                break;
        case "body2.html":
            document.getElementById("3").style.fontWeight = "Bold";
                break;
        case "body3.html":
            document.getElementById("4").style.fontWeight = "Bold";
                break;
        case "sources.html":
            document.getElementById("5").style.fontWeight = "Bold";
                break;
        case "about.html":
            document.getElementById("6").style.fontWeight = "Bold";
                break;

    }
});
