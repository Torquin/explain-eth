const fs = require('fs');
const path = require('path');

const INPUT_JSON = './public/locales/en/translation.json';
const OUTPUT_JSON = './public/locales/en/translation_renamed.json';
const TARGET_PAGE = 'HomePage';
const SRC_DIR = './src/pages'; // Directory to scan for .tsx files

function generateId(length = 8) {
  return Math.random().toString(36).substring(2, 2 + length);
}

// Step 1: Read translations
const translations = JSON.parse(fs.readFileSync(INPUT_JSON, 'utf8'));

if (!translations[TARGET_PAGE]) {
  console.error(`❌ Page key "${TARGET_PAGE}" not found.`);
  process.exit(1);
}

const originalEntries = translations[TARGET_PAGE];
const keyMap = {}; // oldKey -> newKey

const newEntries = {};
for (const oldKey of Object.keys(originalEntries)) {
  const newKey = generateId();
  newEntries[newKey] = originalEntries[oldKey];
  keyMap[oldKey] = newKey;
}

translations[TARGET_PAGE] = newEntries;
fs.writeFileSync(OUTPUT_JSON, JSON.stringify(translations, null, 2));
console.log(`✅ Translation file updated: ${OUTPUT_JSON}`);

// Step 2: Replace in .tsx files
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else if (fullPath.endsWith('.tsx')) {
      callback(fullPath);
    }
  });
}

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  for (const [oldKey, newKey] of Object.entries(replacements)) {
    const fullOldKey = `${TARGET_PAGE}.${oldKey}`;
    const fullNewKey = `${TARGET_PAGE}.${newKey}`;
    const regex = new RegExp(`(["'\`])${fullOldKey}\\1`, 'g');
    const newContent = content.replace(regex, (match, quote) => `${quote}${fullNewKey}${quote}`);

    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`📝 Updated ${filePath}`);
  }
}

// Walk all .tsx files and update keys
walkDir(SRC_DIR, file => replaceInFile(file, keyMap));

console.log('✅ All files updated.');
