const fs = require('fs');
const path = require('path');

function fixPrimary(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace -[var(--primary)] with -primary
    content = content.replace(/bg-\[var\(--primary\)\\]/g, 'bg-primary');
    // It's a bracket, so replace \[-var...
    content = content.replace(/bg-\[var\(--primary\)]/g, 'bg-primary');
    content = content.replace(/text-\[var\(--primary\)]/g, 'text-primary');
    content = content.replace(/from-\[var\(--primary\)]/g, 'from-primary');
    content = content.replace(/border-\[var\(--primary\)]/g, 'border-primary');
    content = content.replace(/shadow-\[var\(--primary\)]/g, 'shadow-primary');

    // color: var(--primary) is valid for style props, so leave it alone if it's there
    // but what about ring?
    content = content.replace(/ring-\[var\(--primary\)]/g, 'ring-primary');

    fs.writeFileSync(filePath, content);
}

function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            processDirectory(fullPath);
        } else if (entry.isFile() && (fullPath.endsWith('.jsx') || fullPath.endsWith('.js'))) {
            fixPrimary(fullPath);
        }
    }
}

processDirectory(path.join(__dirname, 'src', 'components'));
processDirectory(path.join(__dirname, 'src', 'pages'));
console.log('Fixed primary variable tailwind classes');
