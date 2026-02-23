const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '..', 'src', 'pages');

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const hasHeader = /id=["']site-header["']/.test(content);
  const hasFooter = /id=["']site-footer["']/.test(content);
  const hasSiteJs = /\.\/\.\/\.\.\/js\/site\.js|\.\.\/\.\.\/js\/site\.js|\.\.\/js\/site\.js/.test(content) || /src=["'].*site\.js["']/.test(content);
  return { hasHeader, hasFooter, hasSiteJs };
}

function walk(dir) {
  const results = [];
  fs.readdirSync(dir).forEach(name => {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat && stat.isDirectory()) results.push(...walk(p));
    else if (/\.html$/.test(name)) results.push(p);
  });
  return results;
}

const files = walk(pagesDir);
const report = [];
files.forEach(f => {
  const res = checkFile(f);
  report.push({ file: path.relative(process.cwd(), f), ...res });
});

console.log('Smoke check for site placeholders and site.js include');
console.log('-----------------------------------------------------');
report.forEach(r => {
  console.log(`${r.file}: header=${r.hasHeader? 'OK':'MISSING'}, footer=${r.hasFooter? 'OK':'MISSING'}, site.js=${r.hasSiteJs? 'OK':'MISSING'}`);
});

const missing = report.filter(r => !(r.hasHeader && r.hasFooter && r.hasSiteJs));
console.log('\nSummary:');
if (missing.length === 0) console.log('All pages include header/footer placeholders and site.js');
else {
  console.log(`${missing.length} page(s) need attention:`);
  missing.forEach(m => console.log(' - ' + m.file));
}
