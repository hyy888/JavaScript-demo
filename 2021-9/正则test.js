var regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
console.log(regex.test("23:59"));
console.log(regex.test("12:07"));