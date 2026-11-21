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
    imgs.style.transform = `translateX(${-idx * 100}%)`;
    atualizarIndicadores();
}

function irPara(i){
    idx = (i + img.length) % img.length;
    atualizarCarrossel();
}

next.addEventListener("click", () => irPara(idx + 1));
prev.addEventListener("click", () => irPara(idx - 1));

pontos.forEach((ponto, index) => {
    ponto.addEventListener("click", () => irPara(index));
});

const area = document.querySelector(".projetos");
let inicioX = 0;
let inicioY = 0;

area.addEventListener("touchstart", (e) => {
    inicioX = e.touches[0].clientX;
    inicioY = e.touches[0].clientY;
}, { passive: true });

area.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - inicioX;
    const dy = e.changedTouches[0].clientY - inicioY;

    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        irPara(dx < 0 ? idx + 1 : idx - 1);
    }
});