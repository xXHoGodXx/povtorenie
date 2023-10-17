let companies = [
    {
        id: 1,
        name: 'baxtMen',
        budget: 200000,
        tax: 19,
        expenses: [10000, 2000, 60000]
    },
    {
        id: 2,
        name: 'nosfrush',
        budget: 1000,
        tax: 0,
        expenses: [50, 100, 10]
    },
    {
        id: 3,
        name: 'artyomida',
        budget: 400000,
        tax: 23,
        expenses: [5000,14000,3000]
    },
    {
        id: 4,
        name: 'azizas',
        budget: 150000,
        tax: 0,
        expenses: [5000,6000,4000]
    },
    {
        id: 5,
        name: 'openBobur',
        budget: 500,
        tax: 12,
        expenses: [10,30,5]
    },
    {
        id: 6,
        name: 'IS_buildings',
        budget: 1000000,
        tax: 21,
        expenses: [500000, 25000, 10000]
    },
    {
        id: 7,
        name: 'XOJIK_RADAR',
        budget: 40000,
        tax: 12,
        expenses: [500, 2500, 1000]
    },
]


// 1. Посчитать общие расходы каждой компании 

for (let company of companies) {
    let totalExpensive = 0 
    for (let expense of company.expenses) {
            totalExpensive += expense     
    }
    console.log(company.name, totalExpensive);
}

// 2. Показать чистую прибыль каждой компании вычитав расходы и налоги методом for of



for (let company of companies) {
    let total_expenses = 0;
    for (let expense of company.expenses) {
        total_expenses += expense;
    }
    let netProfit = company.budget - total_expenses - (company.budget * (company.tax / 100));
    console.log(company.name, netProfit);
}