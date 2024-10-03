const fs = require('fs');
const path = require('path');

// Directory path for logs
const logsDir = path.join(__dirname, 'Logs');

// Function to create Logs directory and log files
const createLogFiles = () => {
    if (!fs.existsSync(logsDir)) {
        // Create Logs directory if it doesn't exist
        fs.mkdirSync(logsDir);
        console.log('Logs directory created.');
    }

    // Change the process to the Logs directory
    process.chdir(logsDir);

    // Create 10 log files and write some text into each file
    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file #${i}`);
        // Output the file names to console
        console.log(`Created file: ${fileName}`);
    }
};

// Call the function to create log files
createLogFiles();
