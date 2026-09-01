/* =====================================================
   AGRINHO 2026
   JAVASCRIPT PRINCIPAL
===================================================== */


/* ------------------------------
   LISTA DE CARDS
------------------------------ */

const projetos = [
    {
        icone: "🌳",
        titulo: "Preservação",
        texto: "A tecnologia pode ajudar a monitorar áreas naturais e incentivar a preservação das florestas."
    },

    {
        icone: "💧",
        titulo: "Água",
        texto: "Sensores e sistemas inteligentes podem detectar vazamentos e ajudar no uso consciente da água."
    },

    {
        icone: "☀️",
        titulo: "Energia limpa",
        texto: "Fontes renováveis, como a energia solar e eólica, ajudam a reduzir a dependência de combustíveis fósseis."
    },

    {
        icone: "♻️",
        titulo: "Reciclagem",
        texto: "A tecnologia pode facilitar a coleta seletiva, a reutilização de materiais e a redução de resíduos."
    }
];


/* ------------------------------
   CRIAÇÃO DOS CARDS
------------------------------ */

const containerCards =
    document.getElementById("cardsSustentabilidade");


function criarCards() {

    containerCards.innerHTML = "";

    projetos.forEach((projeto) => {

        const card = document.createElement("article");

        card.classList.add("card");

        card.innerHTML = `
            <div
                class="card-icone"
                aria-hidden="true"
            >
                ${projeto.icone}
            </div>

            <h3>${projeto.titulo}</h3>

            <p>${projeto.texto}</p>
        `;

        containerCards.appendChild(card);
    });
}


criarCards();


/* ------------------------------
   MENU MOBILE
------------------------------ */

const menuBtn =
    document.getElementById("menuBtn");

const menu =
    document.getElementById("menu");


menuBtn.addEventListener("click", () => {

    const aberto =
        menu.classList.toggle("aberto");

    menuBtn.setAttribute(
        "aria-expanded",
        aberto
    );

    menuBtn.setAttribute(
        "aria-label",
        aberto
            ? "Fechar menu"
            : "Abrir menu"
    );
});


/* Fechar menu ao clicar em um link */

const linksMenu =
    document.querySelectorAll(".menu a");


linksMenu.forEach((link) => {

    link.addEventListener("click", () => {

        menu.classList.remove("aberto");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

        menuBtn.setAttribute(
            "aria-label",
            "Abrir menu"
        );
    });

});


/* ------------------------------
   MODO ESCURO
------------------------------ */

const btnModoEscuro =
    document.getElementById("btnModoEscuro");


btnModoEscuro.addEventListener("click", () => {

    document.body.classList.toggle("modo-escuro");

    const ativado =
        document.body.classList.contains("modo-escuro");

    atualizarStatus(
        ativado
            ? "Modo escuro ativado."
            : "Modo escuro desativado."
    );
});


/* ------------------------------
   ALTO CONTRASTE
------------------------------ */

const btnContraste =
    document.getElementById("btnContraste");


btnContraste.addEventListener("click", () => {

    document.body.classList.toggle("alto-contraste");

    const ativado =
        document.body.classList.contains("alto-contraste");

    atualizarStatus(
        ativado
            ? "Alto contraste ativado."
            : "Alto contraste desativado."
    );
});


/* ------------------------------
   TAMANHO DA FONTE
------------------------------ */

const btnFonteMais =
    document.getElementById("btnFonteMais");

const btnFonteMenos =
    document.getElementById("btnFonteMenos");


let tamanhoFonte = 16;


btnFonteMais.addEventListener("click", () => {

    if (tamanhoFonte < 22) {

        tamanhoFonte += 1;

        document.documentElement.style.setProperty(
            "--fonte-tamanho",
            `${tamanhoFonte}px`
        );

        atualizarStatus(
            `Tamanho do texto: ${tamanhoFonte}px.`
        );
    }

});


btnFonteMenos.addEventListener("click", () => {

    if (tamanhoFonte > 14) {

        tamanhoFonte -= 1;

        document.documentElement.style.setProperty(
            "--fonte-tamanho",
            `${tamanhoFonte}px`
        );

        atualizarStatus(
            `Tamanho do texto: ${tamanhoFonte}px.`
        );
    }

});


/* ------------------------------
   STATUS DE ACESSIBILIDADE
------------------------------ */

const status =
    document.getElementById(
        "statusAcessibilidade"
    );


function atualizarStatus(mensagem) {

    status.textContent = mensagem;
}


/* ------------------------------
   RESTAURAR CONFIGURAÇÕES
------------------------------ */

const btnReset =
    document.getElementById("btnReset");


btnReset.addEventListener("click", () => {

    document.body.classList.remove(
        "modo-escuro"
    );

    document.body.classList.remove(
        "alto-contraste"
    );

    tamanhoFonte = 16;

    document.documentElement.style.setProperty(
        "--fonte-tamanho",
        "16px"
    );

    atualizarStatus(
        "Configurações restauradas."
    );
});


/* ------------------------------
   BOTÃO VOLTAR AO TOPO
------------------------------ */

const btnTopo =
    document.getElementById("btnTopo");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        btnTopo.classList.add("visivel");

    } else {

        btnTopo.classList.remove("visivel");

    }

});


btnTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ------------------------------
   DESAFIOS SUSTENTÁVEIS
------------------------------ */

const desafios = [

    "Passe um dia evitando desperdício de água.",

    "Separe corretamente os materiais recicláveis.",

    "Apague as luzes de ambientes que não estão sendo utilizados.",

    "Utilize uma garrafa reutilizável em vez de garrafas descartáveis.",

    "Evite comprar algo que você não precisa.",

    "Plante uma árvore ou cuide de uma planta.",

    "Faça uma caminhada ou utilize bicicleta em um trajeto curto.",

    "Converse com alguém sobre a importância da sustentabilidade.",

    "Diminua o desperdício de alimentos.",

    "Descarte corretamente equipamentos eletrônicos."
];


const btnDesafio =
    document.getElementById("btnDesafio");


const resultadoDesafio =
    document.getElementById(
        "resultadoDesafio"
    );


function sortearDesafio() {

    const indice =
        Math.floor(
            Math.random() * desafios.length
        );

    return desafios[indice];
}


btnDesafio.addEventListener("click", () => {

    const desafio =
        sortearDesafio();

    resultadoDesafio.textContent =
        `🌱 Seu desafio: ${desafio}`;

});


/* ------------------------------
   LEITURA EM VOZ ALTA
------------------------------ */

const btnLeitura =
    document.getElementById("btnLeitura");


btnLeitura.addEventListener("click", () => {

    if (!("speechSynthesis" in window)) {

        alert(
            "Seu navegador não possui suporte à leitura em voz alta."
        );

        return;
    }


    const texto =
        `
        Projeto Agrinho 2026.
        Tecnologia para um futuro sustentável.
        A tecnologia pode ajudar a construir um mundo
        mais sustentável, acessível, seguro e consciente.
        Pequenas atitudes podem gerar grandes mudanças.
        `
    ;


    const fala =
        new SpeechSynthesisUtterance(texto);


    fala.lang = "pt-BR";

    fala.rate = 0.9;

    fala.pitch = 1;


    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(fala);

});


/* ------------------------------
   ANO AUTOMÁTICO
------------------------------ */

console.log(
    "Projeto Agrinho 2026 carregado com sucesso!"
);
