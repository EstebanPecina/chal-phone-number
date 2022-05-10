// Write a function that accepts anm array of 10 integers (numbers) bew tween 0 and 9,
//then returns a string of those numbers in the form of a phone number

function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx";

    for(let i = 0; i < numbers.length; i++)
{    
    format = format.replace('x', numbers[i]);
}
    return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))