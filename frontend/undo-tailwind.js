const fs = require('fs');

const file = 'tailwind.config.js';
let content = fs.readFileSync(file, 'utf8');

// Undo the `<alpha-value>` replacement 
content = content.replace(/'hsl\(var\(--([^)]+)\)\ \/\ <alpha-value>\)'/g, "'hsl(var(--$1))'");

fs.writeFileSync(file, content);
console.log('Restored Tailwind config');
