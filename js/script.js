// alert("ciao");
var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");


btnGenera.addEventListener("click",
    function(){
        // prendo valori campi imput - select
        var nome = document.getElementById("nome").value;
        var km = parseInt(document.getElementById("km").value);
        var range = document.getElementById("range").value;
        if (isNaN(km)  ){
            document.getElementById("costo_biglietto").innerHTML = "Inscerisci valore numerico"
            document.getElementById("container_stampa").classList.add("show");
        } else {
            km *= 0.21;
            // controllo prezzo -  fascia età
            if ( range == "minorenne"){
                km = (km * 80 / 100)
                document.getElementById("costo_biglietto").innerHTML = km;
                document.getElementById("offerta").innerHTML = "Sconto Minorenni"
                // prezzo biglietto -20%
            }
            else if ( range == "over"){
                // prezzo biglietto -40%
                km = (km * 60 / 100);
                document.getElementById("costo_biglietto").innerHTML = km;
                document.getElementById("offerta").innerHTML = "Sconto Over 65"
            }
            else {
                document.getElementById("costo_biglietto").innerHTML = km;
                
            }
            // stampo nel containerstampa
            document.getElementById("nome_biglietto").innerHTML = nome;
            document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 11);
            document.getElementById("codice_cp").innerHTML = Math.floor(Math.random() * 99999);
            document.getElementById("container_stampa").classList.add("show");
    
        }

    }

);

btnAnnulla.addEventListener("click",
    function(){
        document.getElementById("container_stampa").classList.remove("show");
        document.getElementById("nome").value = "";
        document.getElementById("km").value = "";
        document.getElementById("range").value = "";
    }
);

