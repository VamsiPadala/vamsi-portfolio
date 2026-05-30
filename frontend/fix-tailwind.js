const fs = require('fs');

const file = 'tailwind.config.js';
let content = fs.readFileSync(file, 'utf8');

// Replace all 'hsl(var(--xyz))' with 'hsl(var(--xyz) / <alpha-value>)'
content = content.replace(/'hsl\(var\(--([^)]+)\)\)'/g, "'hsl(var(--$1) / <alpha-value>)'");

fs.writeFileSync(file, content);
console.log('Fixed Tailwind opacities');
