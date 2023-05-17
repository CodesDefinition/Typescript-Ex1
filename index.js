"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleVerify = void 0;
let cityArr = JSON.parse(localStorage.getItem("Cities") || "[]");
cityArr.map((lookup) => {
    console.log(lookup);
});
const addCountry = (city, country, population, event) => {
    event.preventDefault();
    console.log("country added!");
    cityArr.push({ city, country, population });
    if (localStorage) {
        localStorage.setItem("Cities", JSON.stringify(cityArr));
    }
    displayCities();
};
const displayCities = () => {
    let cities = document.getElementById("myList");
    if (cities) {
        while (cities.hasChildNodes() && cities.firstChild) {
            cities.removeChild(cities.firstChild);
        }
    }
    cityArr.forEach((elem) => {
        let li = document.createElement("li");
        li.innerText = `City: ${elem.city} Country: ${elem.country} Population: ${elem.population}`;
        if (cities) {
            cities.appendChild(li);
        }
    });
};
const searchCity = (cityName) => {
    const citiesFiltered = cityArr.filter((lookup) => {
        return lookup.city.includes(cityName) || lookup.country.includes(cityName);
    });
    let cities = document.getElementById("myList");
    if (cities) {
        while (cities.hasChildNodes() && cities.firstChild) {
            cities.removeChild(cities.firstChild);
        }
    }
    citiesFiltered.forEach((elem) => {
        let li = document.createElement("li");
        li.innerText = `City: ${elem.city} Country: ${elem.country} Population: ${elem.population}`;
        if (cities) {
            cities.appendChild(li);
        }
    });
};
displayCities();
const handleSearch = () => {
    const searchInput = document.getElementById("searchCity");
    searchCity(searchInput.value);
    console.log(searchInput.value);
};
// For ISBN
const handleVerify = (event) => {
    event.preventDefault();
    const isbnInput = document.getElementById("isbn");
    let isbn = isbnInput.value;
    const verify = document.getElementById("content");
    let p = document.createElement("p");
    if (isbn.length === 10) {
        let sum = 0;
        for (let i = 0; i < isbn.length; i++) {
            if (isbn[i] === "X") {
                sum += 10;
            }
            else {
                sum += parseInt(isbn[i]) * (i + 1);
            }
        }
        if (sum % 11 === 0) {
            console.log(sum % 11);
            console.log(true);
            p.innerText = "";
            p.innerText = "Verified: True";
        }
        else {
            console.log(sum % 11);
            console.log(false);
            p.innerText = "";
            p.innerText = "Verified: False";
        }
    }
    else {
        console.log("Not a valid ISBN");
        p.innerText = "";
        p.innerText = "Not a valid ISBN";
    }
    if (verify) {
        while (verify.hasChildNodes() && verify.firstChild) {
            verify.removeChild(verify.firstChild);
        }
    }
    verify === null || verify === void 0 ? void 0 : verify.appendChild(p);
};
exports.handleVerify = handleVerify;
// For Change it Up!
const handleChange = (event) => {
    event.preventDefault();
    const wordPara = document.getElementById("newWord");
    let p = document.createElement("p");
    const wordInput = document.getElementById("word");
    let word = wordInput.value.toLocaleLowerCase();
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        if (word[i] == "z") {
            newWord += "A";
        }
        else if (word[i].charCodeAt(0) >= 48 && word[i].charCodeAt(0) <= 57) {
            newWord += word[i];
        }
        else {
            let asciiVal = word[i].charCodeAt(0);
            newWord += String.fromCharCode(asciiVal + 1);
        }
        console.log(newWord);
        // Make all vowels uppercase
        let finalWord = "";
        for (let i = 0; i < newWord.length; i++) {
            if (newWord[i].charCodeAt(0) == 97 ||
                newWord[i].charCodeAt(0) == 101 ||
                newWord[i].charCodeAt(0) == 105 ||
                newWord[i].charCodeAt(0) == 111 ||
                newWord[i].charCodeAt(0) == 117) {
                let asciiVal = newWord[i].charCodeAt(0);
                finalWord += String.fromCharCode(asciiVal - 32);
            }
            else {
                finalWord += newWord[i];
            }
        }
        console.log(finalWord);
        p.innerText = `New Word: ${finalWord}`;
        if (wordPara) {
            while (wordPara.hasChildNodes() && wordPara.firstChild) {
                wordPara.removeChild(wordPara.firstChild);
            }
        }
        wordPara === null || wordPara === void 0 ? void 0 : wordPara.appendChild(p);
    }
};
const sortZero = (event) => {
    event.preventDefault();
    const sorted = document.getElementById("sorted");
    let p = document.createElement("p");
    const wordInput = document.getElementById("word");
    let word = wordInput.value.trim();
    let wordArr = [];
    let zeroCtr = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == "0") {
            zeroCtr += 1;
        }
        else {
            wordArr.push(word[i]);
        }
    }
    for (let i = 0; i < zeroCtr; i++) {
        wordArr.push("0");
    }
    console.log(wordArr);
    p.innerText = `Sorted Word: ${wordArr}`;
    if (sorted) {
        while (sorted.hasChildNodes() && sorted.firstChild) {
            sorted.removeChild(sorted.firstChild);
        }
    }
    sorted === null || sorted === void 0 ? void 0 : sorted.appendChild(p);
};
