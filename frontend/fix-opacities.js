const fs = require('fs');
const path = require('path');

function replaceOpacities(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // text-muted-foreground/80 -> text-muted-foreground opacity-80
    content = content.replace(/text-[a-zA-Z0-9-]+\/(?:80|60|40|20|10|5)/g, match => {
        const parts = match.split('/');
        return `${parts[0]} opacity-${parts[1]}`;
    });

    // bg-surface-hover/80 -> bg-surface-hover opacity-80
    // Actually, background opacity on a div might make its CHILDREN transparent as well. 
    // This is dangerous.
    content = content.replace(/bg-surface-hover\/(?:80|60|40|20|10|5)/g, match => {
        // Better to just fallback to the base hex colors for these specific translucent cases 
        // OR simply use `bg-surface-hover` without opacity. 
        return 'bg-surface-hover';
    });

    // bg-background/80
    content = content.replace(/bg-background\/(?:80|60|40|20|10|5)/g, match => {
        return 'bg-background';
    });

    // bg-surface/80
    content = content.replace(/bg-surface\/(?:80|60|40|20|10|5)/g, match => {
        return 'bg-surface';
    });

    fs.writeFileSync(filePath, content);
}

function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            processDirectory(fullPath);
        } else if (entry.isFile() && (fullPath.endsWith('.jsx') || fullPath.endsWith('.js'))) {
            replaceOpacities(fullPath);
        }
    }
}

processDirectory(path.join(__dirname, 'src', 'components'));
processDirectory(path.join(__dirname, 'src', 'pages'));
console.log('Fixed opacities');
