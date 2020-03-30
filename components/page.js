import React from 'react'

const Page = ({ children }) => {
  return (
    <div>
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          background-color: #111111;
        }

        @media (max-width: 650px) {
          :global(body) {
            background-color: #ffffff;
          }
        }

        :global(h1) {
          font-family: Rubik, sans-serif;
        }

        :global(p) {
          font-family: Lato, sans-serif;
        }

        :global(a) {
          color: #067df7;
          text-decoration: none;
          font-family: Rubik, sans-serif;
        }

        :global(a:hover) {
          text-decoration: underline;
        }
      `}</style>

      {children}
    </div>
  )
}

export default Page
