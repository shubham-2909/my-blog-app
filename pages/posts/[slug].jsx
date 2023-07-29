import { getFiles, getPostData } from '@/lib/utils'
import PostContent from '@components/posts/post-details/postcontent'
import Head from 'next/head'
export default function SinglePost({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  )
}

export function getStaticProps(context) {
  const {
    params: { slug },
  } = context
  const post = getPostData(slug)
  return { props: { post }, revalidate: 600 }
}

export function getStaticPaths() {
  const allFiles = getFiles()
  const paths = allFiles.map((file) => {
    const postSlug = file.replace(/\.md$/, '') //removes the file extension
    return {
      params: { slug: postSlug },
    }
  })

  return { paths, fallback: false }
}
