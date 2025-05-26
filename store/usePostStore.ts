import type { BlogPostType } from "@/types/blogpost.type"
import { create } from "zustand"

export interface BlogPostStore {
  allPosts: BlogPostType[]
  allPostsEN: BlogPostType[]
  setAllPosts: (posts: BlogPostType[]) => void
  setAllPostsEN: (posts: BlogPostType[]) => void
}

export const useStorePost = create<BlogPostStore>()((set) => ({
  allPosts: [],
  allPostsEN: [],
  setAllPosts: (posts: BlogPostType[]) => set({ allPosts: posts }),
  setAllPostsEN: (posts: BlogPostType[]) => set({ allPostsEN: posts }),
}))
