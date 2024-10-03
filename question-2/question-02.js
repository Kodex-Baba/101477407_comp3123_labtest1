const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success via promise!' });
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('error: delayed exception via promise'));
        }, 500);
    });
};

// Calling the promises and handling them with then/catch
resolvedPromise()
    .then(result => console.log(result)) // Outputs resolved result
    .catch(error => console.error(error));

rejectedPromise()
    .then(result => console.log(result)) // This will not run
    .catch(error => console.error(error)); // Outputs rejected error
