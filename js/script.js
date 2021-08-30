// alert("ciao");
var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");


btnGenera.addEventListener("click",
    function(){
        // prendo valori campi imput - select
        var nome = document.getElementById("nome").value;
        var km = parseInt(document.getElementById("km").value);
        var range = document.getElementById("range").value;
        km *= 0.21;
        // console.log(nome);
        // console.log(km);
        // console.log(range);
        // controllo prezzo -  fascia età
        if ( range == "minorenne"){
            km = (km * 80 / 100)
            document.getElementById("costo_biglietto").innerHTML = km;
            // prezzo biglietto -20%
        }
        else if ( range == "over"){
            // prezzo biglietto -40%
            km = (km * 60 / 100);
            document.getElementById("costo_biglietto").innerHTML = km;
        }
        else {
            document.getElementById("costo_biglietto").innerHTML = km;
            
        }
        // stampo nel containerstampa
        document.getElementById("nome_biglietto").innerHTML = nome;
        document.getElementById("container_stampa").classList.add("show");

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

