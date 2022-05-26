const courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
const requiredRange = [null, 200];
const requiredRange1 = [100, 350];
const requiredRange3 = [200, null];

const arrByPrices = courses.filter(filterByPrices);

console.log("Отфильтрованы по цене,", arrByPrices);

arrByPrices.sort(sortByName);
console.log('Сортировка по имени ', JSON.parse(JSON.stringify(arrByPrices)));

arrByPrices.sort(sortByPrice);
console.log('Сортировка по цене ', arrByPrices);

function filterByPrices(item) {
    const rangeMax = requiredRange1[1] !== null ? requiredRange1[1] : Infinity;
    const rangeMin = requiredRange1[0] !== null ? requiredRange1[0] : 0;
    const courseMax = item.prices[1] !== null ? item.prices[1] : rangeMax;
    const courseMin = item.prices[0] !== null ? item.prices[0] : rangeMin;
    return courseMax >= rangeMin && courseMin <= rangeMax;
}

function sortByName(a, b) {
    return a.name > b.name ? 1: -1;
}

function sortByPrice(a, b) {
    return a.prices[0] > b.prices[0] ? 1: -1;
}