const imgs = document.getElementById("imagens");
const img = document.querySelectorAll("#imagens img")

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const pontos = document.querySelectorAll(".ponto");


let idx = 0;

function atualizarIndicadores(){
    pontos.forEach((ponto) => {
        ponto.classList.remove("ativo");
    });

    pontos[idx].classList.add("ativo");
}

function atualizarCarrossel(){
    const largura = document.querySelector(".projetos").clientWidth;

    imgs.style.transform = `translateX(${-idx * largura}px)`;
    atualizarIndicadores();
}

next.addEventListener("click", () => {
    idx++;

    if(idx >= img.length){
        idx = 0;
    }

    atualizarCarrossel();
});

prev.addEventListener("click", () => {
    idx--;

    if(idx < 0){
        idx = img.length - 1;
    }

    atualizarCarrossel();
});

pontos.forEach((ponto, index) => {
    ponto.addEventListener("click", () => {
        idx = index;
        atualizarCarrossel();
    });
});



//function carrossel(){
  //  idx++;

    //if(idx > img.length - 1){
     //   idx = 0;
    //}

    //  imgs.style.transform = `translateX(${-idx * 700}px)`;
//}

//setInterval(carrossel, 4000);