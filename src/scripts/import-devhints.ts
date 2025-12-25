import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const REPO_URL = 'https://github.com/rstacruz/cheatsheets.git';
const TEMP_DIR = path.join(process.cwd(), 'temp-cheatsheets');
const OUTPUT_DIR = path.join(process.cwd(), 'src/content/cheatsheets');

async function main() {
  console.log('🚀 Starting import from Devhints...');

  // 1. Clone or pull repository
  if (fs.existsSync(TEMP_DIR)) {
    console.log('📂 Updating existing repository...');
    try {
        execSync('git pull', { cwd: TEMP_DIR, stdio: 'inherit' });
    } catch (e) {
        console.error("Git pull failed, removing directory and cloning again.");
        fs.rmSync(TEMP_DIR, { recursive: true, force: true });
        execSync(`git clone ${REPO_URL} ${TEMP_DIR}`, { stdio: 'inherit' });
    }
  } else {
    console.log('📂 Cloning repository...');
    execSync(`git clone ${REPO_URL} "${TEMP_DIR}"`, { stdio: 'inherit' });
  }

  // 2. Process files
  // Only process .md files in the root directory
  const files = fs.readdirSync(TEMP_DIR).filter(f => f.endsWith('.md') && !['README.md', 'CONTRIBUTING.md', 'LICENSE.md', 'History.md'].includes(f));
  
  console.log(`📝 Found ${files.length} cheatsheets.`);

  for (const file of files) {
    const slug = file.replace('.md', '');
    const filePath = path.join(TEMP_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    const parsed = matter(content);
    const data = parsed.data;
    const body = parsed.content;

    // Skip if it looks like a redirect or empty
    if (body.trim().length === 0) continue;

    const sheetDir = path.join(OUTPUT_DIR, slug);
    if (!fs.existsSync(sheetDir)) {
      fs.mkdirSync(sheetDir, { recursive: true });
    }

    // Write index.md (content only)
    fs.writeFileSync(path.join(sheetDir, 'index.md'), body);

    // Prepare meta.json
    const meta = {
      title: data.title || slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' '),
      tags: data.tags || [],
      category: data.category || 'General', 
      difficulty: 'intermediate',
      source: 'Devhints'
    };
    
    fs.writeFileSync(path.join(sheetDir, 'meta.json'), JSON.stringify(meta, null, 2));
    
    console.log(`✅ Imported: ${slug}`);
  }

  console.log('✨ Import complete!');
}

main().catch(console.error);
