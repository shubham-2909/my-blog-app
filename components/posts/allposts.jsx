import Postsgrid from './postgrid'
import styled from './allposts.module.css'
export default function Allposts({ posts }) {
  return (
    <section className={styled.posts}>
      <h1>All Posts</h1>
      <Postsgrid posts={posts} />
    </section>
  )
}
