document.getElementById("changingText1").innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"; 
document.getElementById("changingText2").innerHTML = "Bruttobetrag (Endpreis)";//default


function changeText2() {
    document.getElementById("changingText1").innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro"; //mit der funktion wieder auf default
    document.getElementById("changingText2").innerHTML = "Nettobetrag";
}
function changeText1() {
    document.getElementById("changingText1").innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"; // mit der funktion alles zu brutto
    document.getElementById("changingText2").innerHTML = "Bruttobetrag (Endpreis)";
}
function rechner(){
    let input = Number(document.getElementById("preis").value); //rechner
    let percent=0;
    let diff=0;

    if (document.getElementById("neunzehn").checked) { //prozentsatz wird ermittelt
        percent = 0.19;
    } else {
        percent = 0.07;
    }
    diff=input*percent;
    if (document.getElementById("nzb").checked && input != null) { //fallunterscheidung und input feld darf nicht leer sein 
        document.getElementById("mwstb").innerHTML = diff.toFixed(2) + " €";
        document.getElementById("endpreis").innerHTML = (input + diff).toFixed(2) + " €";
    } else {
        document.getElementById("mwstb").innerHTML = diff.toFixed(2) + " €";
        document.getElementById("enpreis").innerHTML = (input - diff).toFixed(2) + " €";
    }
}