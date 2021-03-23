const video = document.querySelector('video');
const mouseCursor = document.querySelector('.cursor');
const cardsGrid = document.querySelector(".cardsGrid");

const profilsList = [
    {
        firstName: "Loïc",
        lastName: "Brassart",
        img: "./pictures/loic.JPG",
        techs: ["html", "css", "js", "Node", "React", "PHP", "Python"],
        gitHub: "",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Loredan",
        lastName: "David",
        img: "",
        techs: ["html", "css", "js"],
        gitHub: "",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Paris"
    },
    {
        firstName: "Pierre",
        lastName: "Tabary",
        img: "./pictures/pierre.jpg",
        techs: ["html", "css", "github", "js"],
        gitHub: "https://github.com/Erriep",
        linkedin: "https://www.linkedin.com/in/pierre-tabary/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Antoine",
        lastName: "Vancompernolle",
        img: "",
        techs: ["html", "css", "js"],
        gitHub: "https://github.com/frvanco",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Marseille"
    },
    {
        firstName: "Hacene",
        lastName: "Hamroune",
        img: "./pictures/hacene.jpg",
        techs: ["css", "js", "github"],
        gitHub: "https://github.com/Hacene010",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Teddy",
        lastName: "Hochart",
        img: "./pictures/teddy.jpeg",
        techs: ["css", "js", "github"],
        gitHub: "https://github.com/Hochart-dev",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Kévin",
        lastName: "Bodart",
        img: "./pictures/kevin.jpg",
        techs: ["html"],
        gitHub: "https://github.com/bdtkevin",
        linkedin: "https://www.linkedin.com/in/kevin-bodart/",
        email: "bdtkevin@gmail.com",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Reims"
    },
    {
        firstName: "Thai Bang",
        lastName: "Hoang",
        img: "./pictures/bang.jpg",
        techs: ["css", "js", "github"],
        gitHub: "https://github.com/ThaiBangHOANG",
        linkedin: "https://www.linkedin.com/in/thaibanghoang/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Paris"
    },
    {
        firstName: "Christophe",
        lastName: "Luc",
        img: "./pictures/christophe.jpg",
        techs: ["github"],
        gitHub: "https://github.com/christopheluc62",
        linkedin: "https://www.linkedin.com/in/christophe-luc62/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Georges",
        lastName: "Fortry",
        img: "./pictures/georges.jpeg",
        techs: ["github", "html", "python"],
        gitHub: "https://github.com/GeorgesFORTRY",
        linkedin: "https://www.linkedin.com/in/georges-fortry/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Thomas",
        lastName: "Supervil",
        img: "",
        techs: ["github", "html", "python", "js", "css"],
        gitHub: "",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Gaspard",
        lastName: "Dechirot",
        img: "",
        techs: ["github", "html", "css"],
        gitHub: "",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Strasbourg"
    },
    {
        firstName: "Caroline",
        lastName: "Dorchies",
        img: "./pictures/caro.jpg",
        techs: ["html", "css", "js"],
        gitHub: "https://github.com/CaroD59",
        linkedin: "https://www.linkedin.com/in/caroline-dorchies-80953a205/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Mickael",
        lastName: "Dessin",
        img: "./pictures/mika.jpg",
        techs: ["html", "css", "github", "c++"],
        gitHub: "",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Robin",
        lastName: "Delannoy",
        img: "",
        techs: ["css", "github", "c"],
        gitHub: "https://github.com/Zamomako",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Marseille"
    },
    {
        firstName: "Victor",
        lastName: "Maenhout",
        img: "",
        techs: ["css", "github", "java"],
        gitHub: "https://github.com/Maenhout",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Antoine",
        lastName: "Cau",
        img: "./pictures/antoine.jpg",
        techs: ["html", "css", "github"],
        gitHub: "https://github.com/AntoineCAU",
        linkedin: "https://www.linkedin.com/in/antoine-cau-dw/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Julien",
        lastName: "Delemarle",
        img: "./pictures/julien.jpg",
        techs: ["html", "css", "github", "js"],
        gitHub: "",
        linkedin: "https://www.linkedin.com/in/julien-delemarle-3a4998b9/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Luay",
        lastName: "Boungab",
        img: "",
        techs: ["html", "js"],
        gitHub: "",
        linkedin: "",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    },
    {
        firstName: "Sofia",
        lastName: "Boudaoud",
        img: "",
        techs: ["html", "css", "js"],
        gitHub: "https://github.com/Sofiaboud",
        linkedin: "https://www.linkedin.com/in/sofia-boudaoud-051757204/",
        email: "",
        descr: "Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit; huius enim facta, illius dicta laudantur. De me autem, ut iam cum utroque vestrum loquar, sic habetote.",
        city: "Lille"
    }
];

const addCard = (profil, arrayIndex) => {
    const card = document.createElement("article");
    card.id = arrayIndex;
    card.classList.add("card");
    if (profil.img !== "") {
        card.style.backgroundImage = `url("${profil.img}")`;
    } else {
        card.style.backgroundImage = 'url("./pictures/imgNotFound.png")';
    }

    const cardName = document.createElement("div");
    cardName.classList.add("cardName");
    const cardFirstName = document.createElement("p");
    cardFirstName.classList.add("cardFirstName");
    cardFirstName.innerHTML = profil.firstName;
    const cardLastName = document.createElement("p");
    cardLastName.classList.add("cardLastName");
    cardLastName.innerHTML = profil.lastName;
    cardName.appendChild(cardFirstName);
    cardName.appendChild(cardLastName);
    card.appendChild(cardName);

    const cardTechs = document.createElement("p");
    cardTechs.classList.add("cardTechs");
    for (let i = 0; i < profil.techs.length - 1; i++) {
        cardTechs.innerHTML += `${profil.techs[i]}, `;
    };
    cardTechs.innerHTML += `${profil.techs[profil.techs.length - 1]}.`;
    card.appendChild(cardTechs);

    const cardDescr = document.createElement("p");
    cardDescr.classList.add("cardDescr");
    cardDescr.innerHTML = profil.descr;
    cardDescr.style.display = "none";
    card.appendChild(cardDescr);

    const cardContact = document.createElement("div");
    cardContact.classList.add("sendMsg");
    card.appendChild(cardContact);

    if (profil.gitHub !== "") {
        const cardLinkGithub = document.createElement("a");
        cardLinkGithub.href = profil.gitHub;
        cardLinkGithub.target = "_blank";
        const cardIconGithub = document.createElement("img");
        cardIconGithub.classList.add("iconGithub");
        cardIconGithub.src = "./resources/github.svg";
        cardLinkGithub.appendChild(cardIconGithub);
        cardContact.appendChild(cardLinkGithub);
    };

    if (profil.linkedin !== "") {
        const cardLinkLinkedin = document.createElement("a");
        cardLinkLinkedin.href = profil.linkedin;
        cardLinkLinkedin.target = "_blank";
        const cardIconLinkedin = document.createElement("img");
        cardIconLinkedin.src = "./resources/linkedin.svg";
        cardIconLinkedin.classList.add("iconLinkedin");
        cardLinkLinkedin.appendChild(cardIconLinkedin);
        cardContact.appendChild(cardLinkLinkedin);
    };

    if (profil.email !== "") {
        const cardIconMail = document.createElement("img");
        cardIconMail.classList.add("iconSendMail");
        cardIconMail.src = "./resources/sendMail.svg";
        cardContact.appendChild(cardIconMail);
    };

    cardsGrid.appendChild(card);
};

$('.headerSearch').click(() => {
    let posHeader = $('header').position();
    let posDiv = $('.div1').position();
    video.pause();
    $("html, body").animate({ scrollTop: (posHeader.top + $('header').height()) });
    $('main').scrollTop(0);
});

$('.navLogo').click(() => {
    let posHeader = $('header').position();
    video.play();
    $("html, body").animate({ scrollTop: posHeader.top });
});

$('.search.click').click(() => {
    if ($('search.filters').css('display') === "none") {
        $('.search.filters').css('display', 'flex');
        $('.search.filters').hide();
        $('.search.filters').slideToggle(200);
    } else {
        $('.search.filters').slideToggle(200);
    }
});

const cursor = (e) => {
    mouseCursor.style.top = `${e.pageY}px`;
    mouseCursor.style.left = `${e.pageX}px`;
};

window.addEventListener('mousemove', cursor);

for (let i = 0; i < profilsList.length; i++) {
    addCard(profilsList[i], i);
}

$('.card').mouseenter((e) => {
    const id = parseInt(e.currentTarget.id);

    $(`#${id} .cardTechs`).hide();
    $(`#${id} .cardDescr`).show();
});

$('.card').mouseleave((e) => {
    const id = parseInt(e.currentTarget.id);

    $(`#${id} .cardTechs`).show();
    $(`#${id} .cardDescr`).hide();
});

const selectCard = (cities = [], techs = [], i) => {
    if (!cities.includes(profilsList[i].city)) {
        return false;
    }
    console.log(techs);
    for (let tech of techs) {
        if (!profilsList[i].techs.includes(tech)) {
            return false
        };
    }
    return true;
};

document.querySelector("#form").addEventListener('submit', (e) => {
    e.preventDefault();
    const cities = e.target.querySelectorAll('.check.city');
    const techs = e.target.querySelectorAll('.check.tech');
    const arrayCities = [];
    const arrayTechs = [];

    for (let city of cities) {
        if (city.checked) {
            arrayCities.push(city.id);
        }
    }
    for (let tech of techs) {
        if (tech.checked) {
            arrayTechs.push(tech.id);
        }
    }
    while (cardsGrid.firstChild) {
        cardsGrid.removeChild(cardsGrid.lastChild);
      }
    for (let i = 0; i < profilsList.length; i++) {
        if (selectCard(arrayCities, arrayTechs, i)) {
            addCard(profilsList[i], i);
        }
    }
    $('.card').mouseenter((e) => {
        const id = parseInt(e.currentTarget.id);
    
        $(`#${id} .cardTechs`).hide();
        $(`#${id} .cardDescr`).show();
    });
    
    $('.card').mouseleave((e) => {
        const id = parseInt(e.currentTarget.id);
    
        $(`#${id} .cardTechs`).show();
        $(`#${id} .cardDescr`).hide();
    });
});