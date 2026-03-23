const fs = require('fs');
const path = require('path');

const CDN_LINK = '  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">\n';
const TARGET = '<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">';

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Check if it already has the link
      if (!content.includes('bootstrap-icons.min.css')) {
        // Find position of material icons to insert right after
        if (content.includes(TARGET)) {
          content = content.replace(TARGET, TARGET + '\n' + CDN_LINK);
          fs.writeFileSync(fullPath, content);
          console.log(`Updated ${fullPath}`);
        } else {
          // Alternative fallback for index.html if it was slightly different
          const TARGET_ALT = '<!-- Material Icons Rounded -->\r\n  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">';
          if (content.includes(TARGET_ALT)) {
             content = content.replace(TARGET_ALT, TARGET_ALT + '\n  <!-- Bootstrap Icons -->\n' + CDN_LINK);
             fs.writeFileSync(fullPath, content);
             console.log(`Updated ${fullPath}`);
          }
        }
      }
    }
  }
}

processDirectory(path.join(__dirname));
