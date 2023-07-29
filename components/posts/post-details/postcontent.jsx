import PostHeader from './postheader'
import styled from './postcontent.module.css'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Image from 'next/image'
import { PrismLight as SyntaxHighLigher } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import solidity from 'react-syntax-highlighter/dist/cjs/languages/prism/solidity'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`
  SyntaxHighLigher.registerLanguage('css', css)
  SyntaxHighLigher.registerLanguage('js', js)
  SyntaxHighLigher.registerLanguage('solidity', solidity)
  const customComponents = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   )
    // },
    p(paragraph) {
      const { node } = paragraph
      if (node.children[0].tagName === 'img') {
        const image = node.children[0]
        return (
          <div className={styled.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }

      return <p>{paragraph.children}</p>
    },

    code(code) {
      const _array = code.className.split('-')
      const _language = _array[1]
      return (
        <SyntaxHighLigher style={atomDark} language={_language}>
          {code.children[0]}
        </SyntaxHighLigher>
      )
    },
  }
  return (
    <article className={styled.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  )
}
