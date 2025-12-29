import fs from 'fs';
import path from 'path';

const CHEATSHEETS_DIR = path.join(process.cwd(), 'src/content/cheatsheets');

export interface CheatsheetMeta {
  title: string;
  tags: string[];
  category: string;
  difficulty: string;
  source: string;
}

export interface Cheatsheet {
  slug: string;
  meta: CheatsheetMeta;
}

export function getAllCheatsheets(): Cheatsheet[] {
  if (!fs.existsSync(CHEATSHEETS_DIR)) return [];
  
  const dirs = fs.readdirSync(CHEATSHEETS_DIR).filter(f => fs.statSync(path.join(CHEATSHEETS_DIR, f)).isDirectory());
  
  return dirs.map(slug => {
    const metaPath = path.join(CHEATSHEETS_DIR, slug, 'meta.json');
    let meta: CheatsheetMeta;
    try {
        const metaContent = fs.readFileSync(metaPath, 'utf-8');
        meta = JSON.parse(metaContent);
    } catch (e) {
        meta = {
            title: slug,
            tags: [],
            category: 'General',
            difficulty: 'intermediate',
            source: 'Unknown'
        };
    }
    return { slug, meta };
  }).sort((a, b) => a.meta.title.localeCompare(b.meta.title));
}

export function getCheatsheetContent(slug: string): string {
    const contentPath = path.join(CHEATSHEETS_DIR, slug, 'index.md');
    if (!fs.existsSync(contentPath)) return '';
    return fs.readFileSync(contentPath, 'utf-8');
}
