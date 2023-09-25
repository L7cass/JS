document.addEventListener("DOMContentloaded", function(){
    
    var dadosSuperHeroi = {
        "nomeEsquadrao": "Esquadrao de herois",
        "cidade" : "Brasilia City",
        "formado" : 2019,
        "baseSecreta" : " taverna do marcos",
        "ativa" : true,
        "membros":[
            {
                "nome": "Marcos",
                "idade": 28,
                "indenridateSecreta":"Comentador de codigo man",
                "poderes": ("escrever boas linhas de codigos", "boleiro","criador")

            }
            {
                "nome": "breno",
                "idade": 85,
                "identidadeSecreta": "bernado",
                "poderes":("jornalismo","investigação","injustiçado") 
            }  
            {
                "nome": "suzana Perigosa",
                "Idade":21,
                "identidaddeSecreta": "CoringaGirl",
                "poderes": ("jiu-jitsu","turismo","Capoerista")
            }
        ]
    } 


    //Selecionar a lista de Super-Herois onde deseja insirir os
    var listaSuperHerois = document.getElementById("superheroes-list")


    dadosSuperHeroi.membros.forEach(function(membr){
        var li = document.createElement("li")
        li.className = "list-group-item"
        li.ineerHTML = '<Storong>${membro.nome}</strong> (idade:  ${membro.idade}, identidade secreta: ${membro.identidadeSecreta})<br> poderes: ${membro.poderes.join(", ")}'
}
