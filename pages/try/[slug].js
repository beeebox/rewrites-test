import Link from 'next/link'

export default function page() {
  return (
    <div>
      <p>{'try/[slug].js'}</p>
      <Link href="/contact/sales">
        Contact Sales
      </Link>
    </div>
  ) 
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}