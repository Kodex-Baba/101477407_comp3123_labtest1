const fs = require('fs');
const path = require('path');

// Directory path for logs
const logsDir = path.join(__dirname, 'Logs');

// Function to remove all log files and the Logs directory
const removeLogFiles = () => {
    if (fs.existsSync(logsDir)) {
        // Read all files in the Logs directory
        fs.readdirSync(logsDir).forEach(file => {
            const filePath = path.join(logsDir, file);
            // Output file names to delete
            console.log(`Deleting file: ${file}`);
            // Remove each file
            fs.unlinkSync(filePath);
        });

        // Remove Logs directory after deleting all files
        fs.rmdirSync(logsDir);
        console.log('Logs directory removed.');
    } else {
        console.log('Logs directory does not exist.');
    }
};

// Call the function to remove log files and directory
removeLogFiles();
