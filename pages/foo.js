import Link from 'next/link'

export default function page() {
  return (
    <div>
      <p>{'foo.js'}</p>
      <Link href="/contact/sales">
        FOO
      </Link>
    </div>
  ) 
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
