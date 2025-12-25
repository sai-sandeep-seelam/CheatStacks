export interface Bookmark {
  slug: string;
  title: string;
  category?: string;
}

const STORAGE_KEY = 'cheatstack-bookmarks';

export const getBookmarks = (): Bookmark[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const isBookmarked = (slug: string): boolean => {
  const bookmarks = getBookmarks();
  return bookmarks.some((b) => b.slug === slug);
};

export const toggleBookmark = (bookmark: Bookmark): boolean => {
  const bookmarks = getBookmarks();
  const index = bookmarks.findIndex((b) => b.slug === bookmark.slug);
  let newBookmarks;
  let added = false;

  if (index >= 0) {
    newBookmarks = bookmarks.filter((b) => b.slug !== bookmark.slug);
  } else {
    newBookmarks = [...bookmarks, bookmark];
    added = true;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(newBookmarks));
  // Dispatch event for UI updates
  window.dispatchEvent(new Event('bookmarks-updated'));
  return added;
};
