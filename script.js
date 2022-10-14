const events = [
    {
        "nameOfEvent": "Morroco",
        "description": "المملكة المغربية ",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/255px-Flag_of_Morocco.svg.png",
        "population": "37m",
        "price": "Dirham",
        "tags": ["Africa", "Arabic"],
        "link": "https://en.wikipedia.org/wiki/Morroco"
    },
    {
        "nameOfEvent": "Jordan",
        "description": "المملكة الأردنية الهاشمية ",
        "image": "https://cdn.britannica.com/40/1840-004-718BA773/Flag-Jordan.jpg",
        "population": "10m",
        "price": "Dinar",
        "tags": ["Asia", "Arabic"],
        "link": "https://en.wikipedia.org/wiki/Jordan"
    },
    {
        "nameOfEvent": "UK",
        "description": "United Kingdom",
        "image": "https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png",
        "population": "67m",
        "price": "Sterling",
        "tags": ["Europe", "English"],
        "link": "https://en.wikipedia.org/wiki/united_kingdom"
    },
    {
        "nameOfEvent": "USA",
        "description": "United States of America",
        "image": "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg",
        "population": "330m ",
        "price": "Dollar",
        "tags": ["North America", "English"],
        "link": "https://en.wikipedia.org/wiki/United_States"
    },
    {
        "nameOfEvent": "Japan",
        "description": "日本国",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
        "population": "126m",
        "price": "Yen"
        ,"tags": ["Asia", "Japanese"],
        "link": "https://en.wikipedia.org/wiki/japan"
    },
    {
        "nameOfEvent": "Australia",
        "description": "Australia",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
        "population": "26m",
        "price": "AU Dollar",
        "tags": ["Oceania", "English"],
        "link": "https://en.wikipedia.org/wiki/australia"
    },
    {
        "nameOfEvent": "Mexico",
        "description": "Estados Unidos Mexicanos ",
        "image": "https://cdn.britannica.com/73/2573-004-29818847/Flag-Mexico.jpg",
        "population": "129m",
        "price": "Peso",
        "tags": ["North America", "Spanish"],
        "link": "https://en.wikipedia.org/wiki/mexico"
    },
    {
        "nameOfEvent": "NZ",
        "description": "New Zealand",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/800px-Flag_of_New_Zealand.svg.png",
        "population": "5m",
        "price": "NZ Dollar",
        "tags": ["Oceania", "English"],
        "link": "https://en.wikipedia.org/wiki/new_zealand"
    },
    {
        "nameOfEvent": "Egypt",
        "description": "جمهورية مصر العربية",
        "image": "https://cdn.britannica.com/85/185-004-1EA59040/Flag-Egypt.jpg",
        "population": "102m",
        "price": "Money",
        "tags": ["Africa", "Arabic"],
        "link": "https://en.wikipedia.org/wiki/egypt"
    },
    {
        "nameOfEvent": "Spain",
        "description": "Reino de España",
        "image": "https://www.worldatlas.com/img/flag/es-flag.jpg",
        "population": "47m",
        "price": "Money",
        "tags": ["Europe", "Spanish"],
        "link": "https://en.wikipedia.org/wiki/spain"
    }
]
const cbafrica = document.querySelector('#africa')
const cbasia = document.querySelector('#asia')
const cbna = document.querySelector('#northamerica')
const cbeurope = document.querySelector('#europe')
const cboceania = document.querySelector('#oceania')
const cbarabic = document.querySelector('#arabic')
const cbenglish = document.querySelector('#english')
const cbspanish = document.querySelector('#spanish')
const cbjapan = document.querySelector('#japanese')
const cball = document.querySelector('#all')
const titlesearch = [];

const main = document.querySelector("main")
const section = document.createElement('section')
section.classList.add("cards")

function search_title() {

}

function createCard({nameOfEvent, description, image, population, price, tags, link})
{
    const card = document.createElement('div')
    card.classList.add('card')

    const eventname = document.createElement('h2')
    eventname.classList.add("card-title")
    eventname.append(nameOfEvent)

    const des = document.createElement('p')
    des.classList.add("description")
    des.append(description)

    const pop = document.createElement('p')
    pop.classList.add("population")
    pop.append(population)

    const pr = document.createElement('p')
    pr.classList.add("price")
    pr.append(price)

    const ta = document.createElement('p')
    ta.classList.add("tags")
    ta.append(tags[0]+", " + tags[1])

    const img = document.createElement('img')
    img.classList.add("image")

    const btn = document.createElement('button')
    btn.classList.add('button')
    btn.append("More Info?")
    btn.addEventListener('click',() => {
        window.location.href = link;
    })

    img.setAttribute("src", image)
    card.append(eventname,pop, pr, img, des, ta, btn)
    section.append(card)
    main.append(section)
}

events.forEach(element => createCard(element,section));

function test(element, button, tag){
    if(button.checked === true)
        { 
            if(element.tags[0] === tag || element.tags[1] === tag)
            {
                console.log("hello")
                createCard(element, section);
            }
        }
    }

cbafrica.addEventListener('click',() => {
    section.replaceChildren()
    events.forEach(element => test(element, cbafrica, "Africa"))
})

cbasia.addEventListener('click',() => {
    section.replaceChildren()
    events.forEach(element => test(element, cbasia, "Asia"))
})
cbna.addEventListener('click',() => {
    section.replaceChildren()
    events.forEach(element => test(element, cbna, "North America"))
})
cbeurope.addEventListener('click',() => {
    section.replaceChildren()
    events.forEach(element => test(element, cbeurope, "Europe"))
})
cboceania.addEventListener('click',() => {
    section.replaceChildren()
    events.forEach(element => test(element, cboceania, "Oceania"))
})
cbarabic.addEventListener('click',() => {
    section.replaceChildren()
    events.forEach(element => test(element,cbarabic, "Arabic"))
})
cbenglish.addEventListener('click',() => {
    section.replaceChildren()
    events.forEach(element => test(element, cbenglish, "English"))
})
cbspanish.addEventListener('click',() => {
    section.replaceChildren()
    events.forEach(element => test(element, cbspanish, "Spanish"))
})
cbjapan.addEventListener('click',() => {
    section.replaceChildren()
    events.forEach(element => test(element, cbjapan, "Japanese"))
})
cball.addEventListener('click',() => {
    section.replaceChildren()
    events.forEach(element => createCard(element,section));
})