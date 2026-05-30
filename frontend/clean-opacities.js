const fs = require('fs');
const path = require('path');

function cleanComponents(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove 'opacity-80', 'opacity-60', 'opacity-40' from text to ensure full visibility
    // Matches text-foreground/muted-foreground followed by opacity-xx
    content = content.replace(/(text-(?:foreground|muted-foreground|primary))\s+opacity-\d+/g, '$1');

    // Handle the case where they are swapped
    content = content.replace(/opacity-\d+\s+(text-(?:foreground|muted-foreground|primary))/g, '$1');

    // Also remove opacity on headings
    content = content.replace(/(text-[2-9]xl)\s+opacity-\d+/g, '$1');

    fs.writeFileSync(filePath, content);
}

function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            processDirectory(fullPath);
        } else if (entry.isFile() && (fullPath.endsWith('.jsx') || fullPath.endsWith('.js'))) {
            if (!fullPath.includes('node_modules')) {
                cleanComponents(fullPath);
            }
        }
    }
}

processDirectory(path.join(__dirname, 'src', 'components'));
processDirectory(path.join(__dirname, 'src', 'pages'));
console.log('Cleaned text opacities for better visibility');
