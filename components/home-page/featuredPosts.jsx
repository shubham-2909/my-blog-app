import styled from './featuredPost.module.css'
import PostGrid from '@/components/posts/postgrid'
export default function Featuredposts({ posts }) {
  return (
    <section className={styled.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  )
}
