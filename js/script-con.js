const swapBtn = document.getElementById('swap');
let isEnglish = false;

const textosPT = {
    hmenuitem1: "Sobre Mim",
    hmenuitem2: "Competências",
    hmenuitem3: "Formações",
    hmenuitem4: "Experência",
    hmenuitem5: "Contato",
    swap: "PT-BR",
    tittle1: "Contato",
    li1: "Name: Raphael Lombardi de Mello Norbiato;",
    li2: "Gmail: raphael.talvezsim@gmail.com;",
    li3: "Telefone: (44) 98888-8888;",
    li4: "Endereço: Rua Abroba Verde Tigrinho, Jardim Bolsonaro, número 777;",
    f:"Desenvolvido por Raphael Lombardi de Mello Norbiato",
};

const textosEN = {
    hmenuitem1: "About Me",
    hmenuitem2: "Skills",
    hmenuitem3: "Trainings",
    hmenuitem4: "Experience",
    hmenuitem5: "Contact",
    swap: "EN",
    tittle1: "Contact",
    li1: "Name: Raphael Lombardi de Mello Norbiato;",
    li2: "English Course by Athus Assis: first stage complete;",
    li3: "Telephone: (44) 98888-8888;",
    li4: "Address: Street Abroba Green Liitle Tiger, Bolsonaro Garden, number 777;",
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
    document.getElementById("li1").textContent = textos.li1;
    document.getElementById("li2").textContent = textos.li2;
    document.getElementById("li3").textContent = textos.li3;
    document.getElementById("li4").textContent = textos.li4;
    document.getElementById("f").textContent = textos.f;
});