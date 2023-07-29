import PostItem from './postitem'
import styled from './postgrid.module.css'
export default function Postsgrid({ posts }) {
  return (
    <ul className={styled.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  )
}
