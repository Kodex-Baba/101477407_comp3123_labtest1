function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
            return reject(new Error("Input must be an array"));
        }

        const filteredAndLowerCased = array
            .filter(item => typeof item === "string")  // Filter only strings
            .map(item => item.toLowerCase());          // Convert strings to lowercase

        resolve(filteredAndLowerCased);
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'WINGS'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))  // Output: ['pizza', 'wings']
    .catch(error => console.log(error));
