import ContactForm from '@/components/contact/contact'
import Head from 'next/head'
export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact me</title>
        <meta
          name='description'
          content='You can always write me something thats in your mind'
        />
      </Head>
      <ContactForm />
    </div>
  )
}
