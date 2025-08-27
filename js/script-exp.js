const swapBtn = document.getElementById('swap');
let isEnglish = false;

const textosPT = {
    hmenuitem1: "Sobre Mim",
    hmenuitem2: "Competências",
    hmenuitem3: "Formações",
    hmenuitem4: "Experência",
    hmenuitem5: "Contato",
    swap: "PT-BR",
    tittle1: "Experiências profissionais",
    p1: "Nenhuma experiência profissional até o momento  :D",
    f:"Desenvolvido por Raphael Lombardi de Mello Norbiato",
};

const textosEN = {
    hmenuitem1: "About Me",
    hmenuitem2: "Skills",
    hmenuitem3: "Trainings",
    hmenuitem4: "Experience",
    hmenuitem5: "Contact",
    swap: "EN",
    tittle1: "Professional Experience",
    p1: "No professional experience so far :D",
    f:"Created by Raphael Lombardi de Mello Norbiato",
};

swapBtn.addEventListener("click", () => {
    isEnglish = !isEnglish;

    const textos = isEnglish ? textosEN : textosPT

    swap.textContent = textos.botao;
    document.getElementById("hmenuitem1").textContent = textos.hmenuitem1;
    document.getElementById("hmenuitem2").textContent = textos.hmenuitem2;
    document.getElementById("hmenuitem3").textContent = textos.hmenuitem3;
    document.getElementById("hmenuitem4").textContent = textos.hmenuitem4;
    document.getElementById("hmenuitem5").textContent = textos.hmenuitem5;
    document.getElementById("swap").textContent = textos.swap;
    document.getElementById("tittle1").textContent = textos.tittle1;
    document.getElementById("p1").textContent = textos.p1;
    document.getElementById("f").textContent = textos.f;
});