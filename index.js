const inputKupac = document.querySelector('#kupac')
const selectDino = document.querySelector('#dinosaur')
const textareaNapomena = document.querySelector('#napomena')
const buttonNaruci = document.querySelector('#naruci')
const forma = document.querySelector('form')
const buttonIspisNarudzbina = document.querySelector('#ispisNarudzbina')
const divIspisNarucenog = document.querySelector('#divIspisNarucenog')

let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },

    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },

    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },

    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },

    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },

    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },

    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },

    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },

    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]

let nizNarudzbina = []
buttonNaruci.addEventListener('click',(event) => {
    event.preventDefault()

    let ispravno = true
    let text = inputKupac.value
    let slovo = text.charAt(text.indexOf(' ') + 1)

    if (inputKupac.value.length < 4 || inputKupac.value.charAt(0).toLowerCase() == inputKupac.value.charAt(0) || inputKupac.value.indexOf(' ') == -1 || slovo.toLowerCase() == slovo) {
        ispravno = false
        alert ('neispravan unos imena i prezimena')
    }

    if (selectDino.value == 'test') {
        ispravno = false
        alert ('neispravan izbor dinosaurusa')
    }

    if (textareaNapomena.value.length == 0) {
        textareaNapomena.value += 'нема напомене'
    }

    let dinoCena = 0

    // for(let i = 0; i <= dinos.length; i++) {
    //     if(selectDino.value == dinos[i].name) {
    //         dinoCena = dinos[i].cena
    //     }
    // }

    if (selectDino.value == 'Scipionyx') {
        dinoCena = 221
    } else if (selectDino.value == 'Becklespinax') {
        dinoCena = 275
    } else if (selectDino.value == 'Sciurumimus') {
        dinoCena = 341
    } else if (selectDino.value == 'Hypsilophodon') {
        dinoCena = 189
    } else if (selectDino.value == 'Dacentrurus') {
        dinoCena = 315
    } else if (selectDino.value == 'Iguanodon') {
        dinoCena = 374
    } else if (selectDino.value == 'Asylosaurus') {
        dinoCena = 301
    } else if (selectDino.value == 'Efraasia') {
        dinoCena = 199
    } else {
        dinoCena = 218
    }

    let narudzbina = {
        dinosaurus: selectDino.value,
        kupac: inputKupac.value,
        napomena: textareaNapomena.value,
        cena: dinoCena
    }

    if (ispravno) {
        nizNarudzbina.push(narudzbina)
        forma.reset()
    } else {
        forma.reset()
    }
})

buttonIspisNarudzbina.addEventListener('click', (event) => {
    divIspisNarucenog.textContent = ''

    if (nizNarudzbina.length != 0) {
        nizNarudzbina.forEach(element => {
            const divNarudzbina = document.createElement('div')
            const pKupac = document.createElement('p')
            const pNapomena = document.createElement('p')
            const pDinosaurus = document.createElement('p')
            const pCena = document.createElement('p')
            const bObrisi = document.createElement('button')

            pKupac.innerHTML = '<span>Купац: </span>' + element.kupac
            pNapomena.innerHTML = '<span>Напомена: </span>' + element.napomena
            pDinosaurus.innerHTML = '<span>Диносаурус: </span>' + element.dinosaurus
            pCena.innerHTML = '<span>Цена: </span>' + element.cena
            bObrisi.innerHTML = 'Обриши'

            divNarudzbina.append(pKupac, pNapomena, pDinosaurus, pCena, bObrisi)
            divNarudzbina.classList.add('divNarudzbina')
            divIspisNarucenog.append(divNarudzbina)

            bObrisi.addEventListener('click', (event) => {
                nizNarudzbina.splice(nizNarudzbina.indexOf(), 1)
                divNarudzbina.classList.add('noBorder')
                divNarudzbina.textContent = ''
            })
        })
    } else {
        alert('nema narudzbina')
    }
        console.log(nizNarudzbina);
})