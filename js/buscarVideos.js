import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscaVideo(evento){
    evento.preventDefault();

    const dadosDaPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.buscaVideo(dadosDaPesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    
    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))); 

    if(busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem_titulo">Não existem vídeos com esse termo</h2>`;
    }
}
 
const botaoPesquisar = document.querySelector("[data-botao-pesquisa]");

botaoPesquisar.addEventListener("click", evento => buscaVideo(evento));