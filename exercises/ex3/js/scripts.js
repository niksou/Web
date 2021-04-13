var squareNames=["sOne","sTwo","sThree","sFour","sFive","sSix"];
var isClicked=document.getElementById(squareID).style.backgroundColor== 'white';
function createSquares() {
    console.log("TEST!\n");
    var num=6;
    for (var i = 0; i < squareNames.length; i++) {
        document.getElementById(squareNames[i]).style.display= "block";
        document.getElementById(squareNames[i]).style.backgroundImage= "none";
    }
}
function showImgToggle(squareID) {
    console.log("TEST!\n");
    if (isClicked(squareID)) {
        
        document.getElementById(squareID).style.backgroundColor= 'black';
    }
    document.getElementById(squareID).style.backgroundColor= 'white';
    document.getElementById(squareID).style.backgroundImage= 'url("../images/logo.png")';
}