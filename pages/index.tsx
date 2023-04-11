import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import styled from 'styled-components'
import { CssTodo } from './containers/CssTodo'
import { SCTodo } from './containers/SCTodo'

export default function Index({
  time,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <main>
      <div>
        {/* <SCTodo /> */}
        <CssTodo />
      </div>
    </main>
  )
}

export const getStaticProps: GetServerSideProps<{ time: string }> = async () => {
  console.log('cache')

  return {
    props: {
      time: new Date().toISOString(),
    },
    revalidate: 10
  }
}

// const CSSWrapper = ({ children }: { children: any }) => {
//   return (
//     <section className='section'>
//       {children}
//     </section>
//   )
// }

const CSSTitle = ({ children }: { children: any }) => {
  return (
    <h1>
      {children}
    </h1>
  )
}


const Title = styled.h1`
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;