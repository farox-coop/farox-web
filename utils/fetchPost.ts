import { useStorePost } from "@/store/usePostStore"

export const fetchPosts = async (
  locale: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void,
) => {
  setLoading(true)
  setError(null)
  try {
    if (locale === "es") {
      const res = await fetch("/api/blog/es")
      const posts = await res.json()
      useStorePost.getState().setAllPosts(posts)
    } else {
      const res = await fetch("/api/blog/en")
      const posts = await res.json()
      useStorePost.getState().setAllPostsEN(posts)
    }
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    setError("Error fetching blog posts")
  } finally {
    setLoading(false)
  }
}
