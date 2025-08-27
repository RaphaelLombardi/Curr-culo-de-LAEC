const swapBtn = document.getElementById('swap');
let isEnglish = false;

const textosPT = {
    hmenuitem1: "Sobre Mim",
    hmenuitem2: "Competências",
    hmenuitem3: "Formações",
    hmenuitem4: "Experência",
    hmenuitem5: "Contato",
    swap: "PT-BR",
    tittle1: "Minhas Competências",
    p1:"Eu tenho diversas habilidades que são essências para compor um ambiente profissional de qualidade. Durante meu período no Colégio Padre Anchieta, participei de projetos extra curriculares como: Jovens Protagonistas -este em parceria com o núcle regional de educação de Assis Chateaubriand-, Eletiva de Oratória e Grêmio estudantil, que possibilitaram um maior desenvolvimento das minhas competências. Entre elas estão:",
    li1: "Oratória qualificada para expressar e passar meu conhecimento de maneira correta;",
    li2: "Comunicação;",
    li3: "Liderança;",
    li4: "Proatividade;",
    li5: "Trabalho em equipe;",
    li6: "Foco e determinação diante de dificuldades;",
    p2:"Outra competencia extremamente importante no mundo do trabalho atual é a fluência em outros idiomas como o espanhol para faciclitar a comunicação com possíveis colegas de trabalho extrangeiros e o Inglês, que hoje é a língua mais usada internacionalmente e de extrema importância para minha área de atuação. Abaixo está o certificado da conclusão da primeira etapa do curso de Inglês que ainda continuo por fazer atualmente para o meu avanço profissional.",
    f:"Desenvolvido por Raphael Lombardi de Mello Norbiato",
};

const textosEN = {
    hmenuitem1: "About Me",
    hmenuitem2: "Skills",
    hmenuitem3: "Trainings",
    hmenuitem4: "Experience",
    hmenuitem5: "Contact",
    swap: "EN",
    tittle1: "My Skills",
    p1:"I possess several skills that are essential for a high-quality professional environment. During my time at Colégio Padre Anchieta, I participated in extracurricular projects such as Young Protagonists—this one in partnership with the Assis Chateaubriand Regional Education Center—, Public Speaking Elective, and Student Union, which allowed me to further develop my skills. These include:",
    p2: "Another extremely important skill in today's working world is fluency in other languages, such as Spanish, to facilitate communication with potential foreign colleagues, and English, which is currently the most widely used language internationally and extremely important for my field of work. Below is the certificate of completion of the first stage of the English course I'm currently completing for my professional advancement.",
    li1: "Qualified oratory to express and pass on my knowledge correctly;",
    li2: "Communication;",
    li3: "Leadership;",
    li4: "Proactivity;",
    li5: "Teamwork;",
    li6: "Focus and determination in the face of difficulties;",
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
    document.getElementById("p2").textContent = textos.p2;
    document.getElementById("li1").textContent = textos.li1;
    document.getElementById("li2").textContent = textos.li2;
    document.getElementById("li3").textContent = textos.li3;
    document.getElementById("li4").textContent = textos.li4;
    document.getElementById("li5").textContent = textos.li5;
    document.getElementById("li6").textContent = textos.li6;
    document.getElementById("f").textContent = textos.f;
});