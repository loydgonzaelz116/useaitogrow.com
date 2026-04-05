
import { supabase } from './supabaseClient';

// Helper function to calculate read time from content word count
export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export async function getAllPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, content, created_at, updated_at, author, tags')
    .order('created_at', { ascending: false });

  if (error) throw error;

  return (data ?? []).map((post) => ({
    ...post,
    read_time: calculateReadTime(post.content ?? ''),
  }));
}

export async function getPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, content, created_at, updated_at, author, tags')
    .eq('slug', slug)
    .single();

  if (error) throw error;

  return {
    ...data,
    read_time: calculateReadTime(data.content ?? ''),
  };
}
