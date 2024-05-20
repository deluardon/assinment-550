const product = [
    {name: 'don', phone: 'iphone', address: 'rajshahi', Number: '01796850303', brand: 'Google'},
    {name: 'Masud', phone: 'oppp', address: 'rajshahi bangmara', Number: '01759479366', brand: 'apple'},
    {name: 'mamnur roshid', phone: 'itel', address: 'bagmara', Number: '0178495748', brand: 'ipad'},
    {name: 'munni', phone: 'no phone', address: 'my home', Number: '89457489', brand: 'apple-brand'},
    {name: 'ajijar', phone: 'nokiya', address: 'my side', Number: '017834789', brand: 'Google'}
];

const addresses = product.map(x => x.Number);
console.log(addresses);

