// Pokusme se o základ jednoduchého rezervačního sestému pro vstupenky do divadla.

// 1. Založte si webovou stránku s JavaScriptem.
// 2. Nechte uživatele zadat jeho věk.
// 3. Vytvořte si proměnnou plnaCena, udávající základní cenu vstupenky a uložte do ní hodnotu 12.
// 4. Vytvořte podmínku, která do proměnné cena uloží cenu spočítanou podle věku uživatele dle následujících pravidel:
// -0 euro pro návštěvníky mladší 6 let,
// -65 % ze základní ceny pro návštěvníky 6 až 26 let (žák, student),
// -100 % ze základní ceny pro návštěvníky 27 až 64 let (dospělý),
// -50 % ze základní ceny pro ostatní (senior).
// 1. Nezapomeňte na zaokrouhlování, ať nám cena vyjde v celých eurech.
// 2. Nakonec spočtenou cenu vypište s nějakou hezkou zprávou na výstup.

const age = Number(prompt("Zadej věk"));
const plnaCena = 12

let cena = '';
if (age < 6) {
    cena = 0;
} else if (age >= 6 && age <= 26) {
    cena = Math.round(plnaCena * 0.65);
} else if (age >=27 && age <= 64) {
    cena = plnaCena;
} else if (age >= 65) {
    cena = Math.round(plnaCena * 0.5);
}

console.log(cena)
document.body.innerHTML += '<p>' + 'Cena vstupného: ' + cena + ' EUR' + '</p>'