import Hero from '@components/home-page/hero'
import Featuredposts from '@components/home-page/featuredPosts'
import { getFeaturedPosts } from '@/lib/utils'
import Head from 'next/head'
export default function Home({ featuredPosts }) {
  return (
    <>
      <Head>
        <title>Shubham &apos;s blog</title>
        <meta
          name='description'
          content='I blog about next js and blockchain'
        />
      </Head>
      <Hero />
      <Featuredposts posts={featuredPosts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()
  return { props: { featuredPosts } }
}
