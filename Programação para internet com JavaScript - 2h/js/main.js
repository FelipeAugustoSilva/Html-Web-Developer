//var nome = "Felipe Augusto";
//var idade = 29;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade+idade2);
//console.log(idade);
//console.log(idade2);
//console.log(frase.replace("Japão", "Brasil")); //replace troca japao por brasil

//var lista = ["maça","uva","pera"];
//lista.push("laranja"); - adiciona item a lista
//lista.pop("uva"); - retira item da lista
//console.log(lista);


//var lista = ["maça","uva","pera"];
//console.log(lista.lenght); // conta os itens da lista
//console.log(lista.reverse); // imprime a lista ao contrario
//console.log(lista.toString()); // vira uma string
//console.log(lista.join(" - ")); // vira uma string, e separa os itens por -

//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"cenoura", cor:"laranja"}, {nome:"beterraba", cor:"roxa"}]
//console.log(frutas);

/*var idade = prompt("Qual a sua idade ?")
if (idade >= 18){
    alert("Maior de idade.")
}else{
    alert("Infelizmente esse conteudo não e apropriado para menores de idade.")
};*/

/*var count = 0;
while (count < 100.00){
    console.log(count);
    count = count + 3.16;
}*/

//var d = new Date();
//alert(d);

/*function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5058, 17899));

function validarIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
console.log(validarIdade(idade));*/

function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicarr";

    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado!")
}
function redi(){
    window.open("https://web.dio.me/tracks");
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Teste teste"
    //alert("trocar text");
}