const paternEmail = /^\w{1,}@[a-zA-Z_]{3,}\+?\.[a-zA-Z]{2,5}$/;

console.log(paternEmail.test('zero@mai1.xyz'));