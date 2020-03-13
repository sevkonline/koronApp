import Head from 'next/head'

import { GlobalProvider } from '../context/GlobalState'
import MainCards from '../components/mainCards'
import CountrySelectBox from '../components/countrySelectBox'
import SelectedCountry from '../components/selectedCountry'

const Home = () => {
  return (
    <GlobalProvider>
      <div className="container">
        <Head>
          <title>Corona App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1 className="title">
            Welcome to <a href="/">Corona App</a>
          </h1>

          <p className="description">
            This app displays the impact created because of the <code>Covid19 or Corona Virus</code>
          </p>

          <CountrySelectBox />

          <div className="grid">
            <MainCards />
          </div>

          <SelectedCountry />
        </main>

        <footer>
          <a
            href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
          </a>
        </footer>

        <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
  
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
  
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
  
        footer img {
          margin-left: 0.5rem;
        }
  
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
  
        a {
          color: inherit;
          text-decoration: none;
        }
  
        .title a {
          color: #0070f3;
          text-decoration: none;
        }
  
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
  
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
  
        .title,
        .description {
          text-align: center;
        }
  
        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
  
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
  
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
  
          width: 900px;
          margin-top: 3rem;
        }
  
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
  
        * {
          box-sizing: border-box;
        }
      `}</style>
      </div>
    </GlobalProvider>
  )
}

export default Home
