import { Component } from 'react'
import Head from 'next/head'

/**
 * data [{ id: string, content: string, created_at: Date }]
 */

export default class Home extends Component {
  render() {
    return (
      <div className="flex flex-col items-center min-h-screen py-2">
        <Head>
          <title>Text Share</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{' '}
            <a className="text-blue-600" href="https://nextjs.org">
              Next.js
            </a>
          </h1>
  
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <div
              className="p-6 mt-6 text-left border w-96 md:w-full rounded-xl"
            >
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </div>
  
            <div
              className="p-6 mt-6 text-left border w-96 md:w-full rounded-xl"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
