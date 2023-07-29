import styled from './postheader.module.css'
import Image from 'next/legacy/image'
export default function PostHeader({ title, image }) {
  return (
    <header className={styled.header}>
      <h1>{title}</h1>
      <Image src={image} alt='Post Image' width={400} height={300} />
    </header>
  )
}
