import Image from 'next/image'
import styled from './here.module.css'
export default function Hero() {
  return (
    <section className={styled.hero}>
      <div className={styled.image}>
        <Image
          src={`/images/site/Shubham.jpeg`}
          alt='Shubham img'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I&apos;m Shubham</h1>
      <p>
        I blog about web development and Blockchain development. Frameworks like
        next js web3js and also solidity
      </p>
    </section>
  )
}
