import { createHighlighter, type Highlighter } from 'shiki';

let highlighterInstance: Highlighter | null = null;

export async function getHighlighter() {
  if (highlighterInstance) return highlighterInstance;

  highlighterInstance = await createHighlighter({
    themes: ['github-light', 'github-dark'],
    langs: [
      'javascript', 'typescript', 'python', 'bash', 'html', 'css', 'json', 
      'markdown', 'yaml', 'sql', 'java', 'c', 'cpp', 'go', 'rust', 'ruby', 
      'php', 'elixir', 'swift', 'xml', 'docker', 'ini', 'toml'
    ]
  });

  return highlighterInstance;
}
