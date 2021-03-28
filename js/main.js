// String conversion
let stringConversion = String(123);
console.log('--String Conversion');
console.log(stringConversion);
console.log(typeof stringConversion);
console.log(123 + '');

// Numeric conversion
let numericConversion = Number("Salam"); // Eyer string duzgun reqem deilse NaN olacaq
console.log('--Numeric Conversion');
console.log(numericConversion);
console.log(typeof numericConversion);
console.log(Number("24")); // Eyer string duzgun reqemdirse NaN olmur
console.log(+"Salam");

// Boolean conversion
// falsy truthy
// '', 0, undefined, null, NaN, false
console.log('--Boolean conversion');
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));
console.log(Boolean('0'));
console.log(Boolean(' '));
