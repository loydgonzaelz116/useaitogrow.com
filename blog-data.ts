
// NOTE: read_time column has been removed from select queries as it does not exist in Supabase

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function getAllPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, published_at, author, tags, cover_image');

  if (error) throw error;
  return data;
}

export async function getPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, content, published_at, author, tags, cover_image')
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data;
}
