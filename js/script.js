const swapBtn = document.getElementById('swap');
let isEnglish = false;

const textosPT = {
    hmenuitem1: "Sobre Mim",
    hmenuitem2: "Competências",
    hmenuitem3: "Formações",
    hmenuitem4: "Experência",
    hmenuitem5: "Contato",
    swap: "PT-BR",
    tittle1: "Introdução: Um pouco sobre mim",
    p1:"Meu nome é Raphael Lombardi, tenho 15 anos e atualmente sou estudante e bolsista do Instituto Federal do Paraná: Campus Assis Chateaubriand (atualemente pelo PACE). Busco através deste currículo digital me candidatar à uma vaga de estágio meio período (de preferência noturno) tanto no setor administrativo, quanto para desenvolvimento Web e auxiliar de TI. Atualmente estou cursando o Curso Técnico em Informática para Web Integrado ao Ensino Médio durante o período matutino e duas tardes semanais. Durante meu corrente desenvolvimento no IFPR, fui eleito vice-líder da minha turma (IIW25) e hoje sou o estudante da turma com a maior média de notas nos dois primeiros bimestres do meu curso.",
    li1: "Nome: Raphael Lombardi de Mello Norbiato",
    li2: "Idade: 15 Anos",
    li3: "Ocupação: Estudante (ensino médio)",
    li4: "Gmail: raphael.talvezsim@gmail.com",
    li5: "Telefone: (44) 98888-8888",
    li6: "Período disponível: Notuno (18:00 ~ 23:00)",
    f:"Desenvolvido por Raphael Lombardi de Mello Norbiato",
};

const textosEN = {
    hmenuitem1: "About Me",
    hmenuitem2: "Skills",
    hmenuitem3: "Trainings",
    hmenuitem4: "Experience",
    hmenuitem5: "Contact",
    swap: "EN",
    tittle1: "Introduction: A little about me",
    p1:"My name is Raphael Lombardi, I'm 15 years old, and I'm currently a student and scholarship holder at the Instituto Federal do Paraná: Assis Chateaubriand Campus (currently through PACE). Through this digital resume, I'm applying for a part-time internship (preferably evening) in administration, web development, and IT support. I'm currently taking the Technical Course in Web Computing, integrated with high school, during the morning and two afternoon sessions per week. During my current internship at IFPR, I was elected vice-leader of my class (IIW25) and today I have the highest grade point average in the first two semesters of my course.",
    li1: "Name: Raphael Lombardi de Mello Norbiato",
    li2: "Age: 15 Years",
    li3: "Ocupation: Student (High School)",
    li4: "Gmail: raphael.talvezsim@gmail.com",
    li5: "Telephone: (44) 98888-8888",
    li6: "Available period: Night (6:00pm ~ 11:00pm)",
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
    document.getElementById("li1").textContent = textos.li1;
    document.getElementById("li2").textContent = textos.li2;
    document.getElementById("li3").textContent = textos.li3;
    document.getElementById("li4").textContent = textos.li4;
    document.getElementById("li5").textContent = textos.li5;
    document.getElementById("li6").textContent = textos.li6;
    document.getElementById("f").textContent = textos.f;
});