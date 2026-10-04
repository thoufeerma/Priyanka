const fs = require('fs');
const path = require('path');

function processDir(dir) {
  let changedFiles = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      changedFiles = changedFiles.concat(processDir(fullPath));
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const regex = /<section([^>]*)data-bg="--color-([^"]+)"([^>]*)>/g;
      
      const newContent = content.replace(regex, (match, before, color, after) => {
        let newTag = `<section${before}${after}>`;
        newTag = newTag.replace(/\bbg-transparent\b/, `bg-${color}`);
        return newTag;
      });
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        changedFiles.push(fullPath);
      }
    }
  }
  return changedFiles;
}

const changed = processDir('src/components');
console.log(JSON.stringify(changed, null, 2));
