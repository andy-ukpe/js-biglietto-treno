// kilometraggio
var kilometri = parseInt(prompt("Inserire i km da percorrere"));
console.log(kilometri);

// prezzo del biglietto
var prezzoBiglietto = kilometri * 0.21;
console.log(prezzoBiglietto);
var prezzoUnitario = '€' + prezzoBiglietto;
console.log(prezzoUnitario);


// età del viaggiatore
var etaViaggiatore = (prompt("Inserire età del passegiero"))
console.log(etaViaggiatore);

// operatori logici
if ( !isNaN(kilometri) && !isNaN(etaViaggiatore) ) {

if ( etaViaggiatore <= 17 ){
  var scontoMinori =  (prezzoBiglietto * 20) / 100 ;
  console.log(scontoMinori);
  var calcoloSconto = prezzoBiglietto - scontoMinori;
  console.log(calcoloSconto);
  var prezzoScontato = '€' + calcoloSconto;
  console.log(prezzoScontato);
  document.getElementById('prezzo-unitario').innerHTML = 'Prezzo Unitario: ' + prezzoUnitario ;
  document.getElementById('prezzo-scontato').innerHTML = 'Prezzo Under 17: ' + prezzoScontato ;
} else if (etaViaggiatore >= 65){
  var scontoMajor = ( prezzoBiglietto * 40 ) / 100;
  console.log(scontoMajor);
  var calcoloSconto = (prezzoBiglietto - scontoMajor);
  console.log(calcoloSconto);
  var prezzoScontato = '€' + calcoloSconto;
  console.log(prezzoScontato);
  document.getElementById('prezzo-unitario').innerHTML= 'Prezzo Unitario: ' + prezzoUnitario ;
  document.getElementById('prezzo-scontato').innerHTML= 'Prezzo Senior: ' + prezzoScontato ;
} else {
  console.log(prezzoUnitario);
  document.getElementById('prezzo-unitario').innerHTML= 'Prezzo Unitario: ' + prezzoUnitario ;
}
} else{
  alert('Attezione! Inserire caratteri numerici');
}
