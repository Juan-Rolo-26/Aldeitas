const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// Replace specific grid layouts in mobile breakpoints to stay horizontal
css = css.replace(/(@media \([^\{]+\)\s*\{[\s\S]*?\.presentacion-grid\s*\{[^}]*?grid-template-columns:\s*)1fr;/g, '$11fr 1fr;');
css = css.replace(/(@media \([^\{]+\)\s*\{[\s\S]*?\.quienes-grid\s*\{[^}]*?grid-template-columns:\s*)1fr;/g, '$11fr 1fr;');
css = css.replace(/(@media \([^\{]+\)\s*\{[\s\S]*?\#hero\s*\{[^}]*?grid-template-columns:\s*)1fr;/g, '$11fr 1fr;');
css = css.replace(/(@media \([^\{]+\)\s*\{[\s\S]*?\.diferenciales-grid\s*\{[^}]*?grid-template-columns:\s*)1fr;/g, '$1repeat(2, 1fr);');
css = css.replace(/(@media \([^\{]+\)\s*\{[\s\S]*?\.pasos-grid\s*\{[^}]*?grid-template-columns:\s*)1fr;/g, '$1repeat(2, 1fr);');
css = css.replace(/(@media \([^\{]+\)\s*\{[\s\S]*?\.unidades-grid\s*\{[^}]*?grid-template-columns:\s*)1fr;/g, '$1repeat(2, 1fr);');
css = css.replace(/(@media \([^\{]+\)\s*\{[\s\S]*?\.stats-row\s*\{[^}]*?grid-template-columns:\s*)1fr;/g, '$11fr 1fr;');
css = css.replace(/(@media \([^\{]+\)\s*\{[\s\S]*?\.footer-grid\s*\{[^}]*?grid-template-columns:\s*)1fr;/g, '$11fr 1fr;');
css = css.replace(/(@media \([^\{]+\)\s*\{[\s\S]*?\.distribucion-card\s*\{[^}]*?grid-template-columns:\s*)1fr;/g, '$11fr 1fr;');
css = css.replace(/(@media \([^\{]+\)\s*\{[\s\S]*?\.form-row\s*\{[^}]*?grid-template-columns:\s*)1fr;/g, '$11fr 1fr;');

// Add a super important CSS rule for smaller font sizes on mobile so it fits!
const htmlResize = `
@media (max-width: 768px) {
  html {
    font-size: 10px !important;
  }
}
@media (max-width: 480px) {
  html {
    font-size: 8px !important;
  }
}
`;
css = css + '\n' + htmlResize;

fs.writeFileSync('src/index.css', css);
