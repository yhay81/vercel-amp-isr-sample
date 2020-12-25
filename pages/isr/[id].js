import { useAmp } from 'next/amp'

export const config = { amp: 'hybrid' }
export const getStaticProps = async ({ params }) => ({
  props: { id: params.id },
})
export const getStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
})

export default function Home({ id }) {
  const isAmp = useAmp()
  return (
    <div>
      <div>id:{id}</div>
      <div>isAmp:{isAmp.toString()}</div>
    </div>
  )
}
