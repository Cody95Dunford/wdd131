const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
console.log("text");
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Nashville Tennesse",
        location: "Nashville, Tennesse",
        dedicated: "2000, May, 21",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/nashville-tennessee-temple/nashville-tennessee-temple-50097.jpg"
    },
    {
        templeName: "Birmingham Alabama",
        location: "Birmingham, Alabama",
        dedicated: "2000, September, 3",
        area: 10700,
        imageUrl:
        "https://i.pinimg.com/474x/59/ac/78/59ac781a7aa657d0517d80375e6b77b6--mormon-temples-lds-temples.jpg"
    },
    {
        templeName: "Ogden Utah",
        location: "Ogden, Utah",
        dedicated: "1972, January, 18",
        area: 112232,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/ogden-utah-temple/ogden-utah-temple-55088.jpg"
    }
];

createTempleCard(temples);

const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});

oldLink.addEventListener("click", () => {
    var year, month, day;
    const filteredTemples = JSON.parse(JSON.stringify(temples));
    var dedDates = [];
    for (var i = 0; i < filteredTemples.length; i++)
    {
        var holdDate = filteredTemples[i].dedicated.split(", ");
        year = holdDate[0];
        month = holdDate[1];
        day = holdDate[2];

        dedDates.push({templeName: filteredTemples[i].templeName, dedicated: new Date(month + "," + day + "," + year)});
    }

    dedDates.sort((a,b) => a.dedicated - b.dedicated);

    const orderMap = new Map();
    dedDates.forEach((item, index) => {
        orderMap.set(item['templeName'], index);
    });

    filteredTemples.sort((a, b) => {
        const aIndex = orderMap.get(a['templeName']);
        const bIndex = orderMap.get(b['templeName']);
        return aIndex - bIndex;
    });
    
    createTempleCard(filteredTemples);
})

newLink.addEventListener("click", () => {
    var year, month, day;
    const filteredTemples = JSON.parse(JSON.stringify(temples));
    var dedDates = [];
    for (var i = 0; i < filteredTemples.length; i++)
    {
        var holdDate = filteredTemples[i].dedicated.split(", ");
        year = holdDate[0];
        month = holdDate[1];
        day = holdDate[2];

        dedDates.push({templeName: filteredTemples[i].templeName, dedicated: new Date(month + "," + day + "," + year)});
    }

    dedDates.sort((a,b) => a.dedicated - b.dedicated);

    const orderMap = new Map();
    dedDates.forEach((item, index) => {
        orderMap.set(item['templeName'], index);
    });

    filteredTemples.sort((a, b) => {
        const aIndex = orderMap.get(a['templeName']);
        const bIndex = orderMap.get(b['templeName']);
        return bIndex - aIndex;
    });
    
    createTempleCard(filteredTemples);
})

largeLink.addEventListener("click", () => {
    createTempleCard(temples.sort((a,b) => b.area - a.area));
})

smallLink.addEventListener("click", () => {
    createTempleCard(temples.sort((a,b) => a.area - b.area));
})

function createTempleCard(temples) {
    document.querySelector(".res-grid").innerHTML = "";
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">area:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        card.classList.add("card");

        document.querySelector(".res-grid").appendChild(card);
    })
}