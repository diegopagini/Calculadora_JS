window.onload = function() {
  pantalla = document.getElementById("resultado")
}
x = 0;
xi = 1;
ni = 0;
op = "no";


function numero(xx) {
  if (x=="0" || x==1) {
    pantalla.innerHTML = xx;
    x = xx;
  }
  else {
    pantalla.innerHTML += xx;
    x += xx;
  }
  xi = 0;
}

function operar(s) {
  igualar();
  ni = x;
  op = s;
  xi = 1;
}

function igualar() {
  if(op=="no") {
    pantalla.innerHTML=x;
  } 
  else {
    sl = ni + op + x;
    sol = eval(sl);
      pantalla.innerHTML= sol;
      x = sol;
      op = "no";
      xi = 1;
  }
}

function borradoTotal() {
  pantalla.innerHTML=0;
  x="0";
  ni=0;
  op="no"
}