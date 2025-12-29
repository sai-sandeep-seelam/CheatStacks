import { getAllCheatsheets, getCheatsheetContent } from '../utils/cheatsheets';

export async function GET() {
  const cheatsheets = getAllCheatsheets();
  
  const searchIndex = cheatsheets.map(({ slug, meta }) => ({
    slug,
    title: meta.title,
    tags: meta.tags,
    category: meta.category,
    content: getCheatsheetContent(slug) 
  }));

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
