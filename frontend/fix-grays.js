const fs = require('fs');
const path = require('path');

function processGray(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Any remaining gray backgrounds
    content = content.replace(/bg-gray-[0-9]+/g, 'bg-muted');

    // Any remaining text-gray
    content = content.replace(/text-gray-[0-9]+/g, 'text-muted-foreground');

    // Any remaining border-gray
    content = content.replace(/border-gray-[0-9]+/g, 'border-border');

    // Also replace [var(--primary)] if it was missed anywhere
    content = content.replace(/\[var\(--primary\)\\]/g, 'primary');
    content = content.replace(/\[var\(--primary\)]/g, 'primary');

    fs.writeFileSync(filePath, content);
}

function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            processDirectory(fullPath);
        } else if (entry.isFile() && (fullPath.endsWith('.jsx') || fullPath.endsWith('.js'))) {
            processGray(fullPath);
        }
    }
}

processDirectory(path.join(__dirname, 'src', 'components'));
processDirectory(path.join(__dirname, 'src', 'pages'));
console.log('Fixed grays');
