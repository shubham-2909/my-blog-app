import { getAllPosts } from '@/lib/utils'
import AllPosts from '@components/posts/allposts'
import Head from 'next/head'
export default function AllPostsPage({ allPosts }) {
  return (
    <div>
      <Head>
        <title>All Posts</title>
        <meta name='description' content='All posts of Shubham Gandhi' />
      </Head>
      <AllPosts posts={allPosts} />
    </div>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts()
  return { props: { allPosts } }
}
