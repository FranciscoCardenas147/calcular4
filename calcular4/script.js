document.querySelector("#calcular").addEventListener("click", mostrar);
function mostrar(){
  let input = Number(document.querySelector("#input").value);
  console.log("el valor es: "+input)
  let valorIva = input *0.19;
  let inputIva = document.querySelector("#inputIva");
  inputIva.innerHTML = `El IVA correspondiente es:  ${valorIva}`;
  let inputNeto = document.querySelector("#inputNeto");
  let valorNeto = parseInt((input/1.6)/ 1.19);
  console.log(valorNeto)
  inputNeto.innerHTML= `El valor Neto es : ${valorNeto}`;
}