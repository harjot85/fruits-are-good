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
    const fruits = [
        {
            genus: "Musa",
            name: "Banana",
            id: 1,
            family: "Musaceae",
            order: "Zingiberales",
            nutritions: {
                carbohydrates: 22,
                protein: 1,
                fat: 0.2,
                calories: 96,
                sugar: 17.2,
            },
        },
        {
            genus: "Malus",
            name: "Apple",
            id: 6,
            family: "Rosaceae",
            order: "Rosales",
            nutritions: {
                carbohydrates: 11.4,
                protein: 0.3,
                fat: 0.4,
                calories: 52,
                sugar: 10.3,
            },
        },
    ];

    const fruit = fruits.find((f) => f.name.toLowerCase() === name.toLowerCase());
    return fruit
}
