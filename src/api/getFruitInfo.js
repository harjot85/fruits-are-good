import data from "../data/fruits.json";

export async function getFruitDataByFruitName(fruitName) {
    const response = await fetch(`https://fruityvice.com/api/fruit/banana`, {
        mode: "no-cors",
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    }).then((response) => {
        // console.log(response)
    });

    return response;
}

export function getLocalFruitDataByFruitName(name) {
    const fruits = data
    console.log(fruits)
    const fruit = fruits.find((f) => f.name.toLowerCase() === name.toLowerCase());
    return fruit
}
