const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Any dark background hex that is primarily used for backgrounds
    content = content.replace(/bg-\[#[0-9a-fA-F]{3,6}\]/g, 'bg-background');
    
    // Any white/[opacity] backgrounds used for cards -> bg-surface
    content = content.replace(/bg-white\/\[0\.[0-9]+\]/g, 'bg-surface-hover');
    content = content.replace(/bg-white\/[0-9]+/g, 'bg-surface-hover');
    
    // Any border-white/[opacity] -> border-border
    content = content.replace(/border-white\/\[0\.[0-9]+\]/g, 'border-border');
    content = content.replace(/border-white\/[0-9]+/g, 'border-border');
    
    // border-gray-xxx -> border-border
    content = content.replace(/border-gray-[0-9]+/g, 'border-border');

    // text-gray-xxx -> text-muted-foreground
    content = content.replace(/text-gray-[0-9]+/g, 'text-muted-foreground');

    // text-white -> text-foreground
    content = content.replace(/text-white/g, 'text-foreground');

    // Special case for shadows
    content = content.replace(/shadow-\[inset_0_0_[0-9]+px_rgba\([^)]+\)\]/g, 'shadow-[inset_0_0_30px_var(--surface)]');

    fs.writeFileSync(filePath, content);
}

function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            processDirectory(fullPath);
        } else if (entry.isFile() && (fullPath.endsWith('.jsx') || fullPath.endsWith('.js'))) {
            // skip node_modules and setup files
            if (!fullPath.includes('node_modules') && !fullPath.includes('tailwind') && !fullPath.includes('LampToggle')) {
                replaceInFile(fullPath);
                console.log('Processed', fullPath);
            }
        }
    }
}

// target src/components and src/pages
processDirectory(path.join(__dirname, 'src', 'components'));
processDirectory(path.join(__dirname, 'src', 'pages'));
console.log('Done!');
