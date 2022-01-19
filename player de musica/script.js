let musicas = [
    {titulo:'Bay Street Billionaires', artista:'Squadda', src:'imagens/musicas/Bay Street Billionaires - Squadda B.mp3',
    img:'imagens/maxresdefault.jpg'},
    {titulo:'Burbank', artista:'Squadda', src:'imagens/musicas/Burbank Late Nights - Squadda B.mp3',
    img:'imagens/joseph-ngabo-kWnLO5B-X2s-unsplash.jpg'},
    {titulo:'Til I Hearem Say', artista:'NEFFEX', src:'imagens/musicas/Til I Hearem Say - NEFFEX.mp3',
    img:'imagens/tatonomusic-t06xJHRFoYU-unsplash (1).jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descrição h2');
let nomeArtista = document.querySelector('.descrição i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
   indexMusica--;
   if (indexMusica < 0) {
       indexMusica = 2;
   } 
   renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
   indexMusica++; 
   if (indexMusica > 2){
       indexMusica = 0;
   }
   renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos (Math.floor(musica.duration));
});
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor ((musica.currentTime / musica.duration) * 100) + '%'; 
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos (Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}

