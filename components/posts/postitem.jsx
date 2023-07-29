import Image from 'next/legacy/image'
import Link from 'next/link'
import styled from './postitem.module.css'
export default function PostItem({ post }) {
  const { slug, image, title, date, excerpt } = post
  const formatedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  })

  const linkPath = `/posts/${slug}`

  const imagePath = `/images/posts/${slug}/${image}`
  return (
    <li className={styled.post}>
      <Link href={linkPath}>
        <div className={styled.image}>
          <Image
            src={imagePath}
            alt='post image'
            width={300}
            height={200}
            layout='responsive'
          />
        </div>
        <div className={styled.content}>
          <h3>{title}</h3>
          <time>{formatedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  )
}
