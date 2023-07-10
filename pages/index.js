import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Ninja Team</title>
          <meta
            name="description"
            content="Ninja Team is a highly skilled and specialized | collective knowledge and expertise to create high-end Jamstack web solutions for their clients."
          />
          <meta property="og:title" content="Ninja Team" />
          <meta
            property="og:description"
            content="Ninja Team is a highly skilled and specialized | collective knowledge and expertise to create high-end Jamstack web solutions for their clients."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/68b09f63-53b3-4029-b9d4-aba111d85ba8/8fa5b449-576e-458d-b94c-5b58d2fa46f5?org_if_sml=1"
          />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar">
          <Link href="/">
            <a className="home-link">
              <img src="/path15-200h.webp" alt="image" className="home-image" />
            </a>
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <button className="home-button button-clean button">About</button>
              <button className="home-button1 button-clean button">
                Features
              </button>
              <button className="home-button2 button-clean button">
                Pricing
              </button>
              <button className="home-button3 button-clean button">Team</button>
              <button className="home-button4 button-clean button">Blog</button>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group">
            <div className="home-socials">
              <button className="social button">
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="home-image01"
                />
              </button>
              <button className="social button">
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="home-image02"
                />
              </button>
            </div>
            <a href="#go" className="home-view button">
              Our Bio
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="button home-button5">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container1">
                <span className="home-logo">Character</span>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <span className="home-text">About</span>
                <span className="home-text01">Features</span>
                <span className="home-text02">Pricing</span>
                <span className="home-text03">Team</span>
                <span className="home-text04">Blog</span>
              </nav>
              <div className="home-container2">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <section className="home-hero">
          <div className="home-heading">
            <h1 className="home-header">We Create Web3 With JAMSTACK</h1>
            <p className="home-caption">
              Web3 / JAMSTACK / NFT
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="home-buttons">
            <a href="#go" className="home-view1 button">
              Our Bio
            </a>
            <a href="#go" className="home-learn button-clean button">
              Learn more
            </a>
          </div>
        </section>
        <section className="home-description">
          <img
            alt="image"
            src="/hero-divider-1500w.png"
            className="home-divider-image"
          />
          <div className="home-description1">
            <div className="home-content">
              <p className="home-paragraph">
                <span>
                  Ninja Team is a highly skilled and specialized team consisting
                  of three members: Shirly, the designer, Boaz, the project
                  manager, and Gilad, the developer. The team uses their
                  collective knowledge and expertise to create high-end Jamstack
                  web solutions for their clients.
                </span>
                <br></br>
                <br></br>
                <span>
                  As the designer, Shirly brings a wealth of experience in
                  creating visually stunning and intuitive web designs. She
                  works closely with clients to understand their brand and
                  target audience, ensuring that the website&apos;s aesthetics
                  and user experience align with their goals.
                </span>
                <br></br>
                <br></br>
                <span>
                  Boaz, the project manager, oversees the project&apos;s overall
                  success, ensuring that it is delivered on time, within budget,
                  and meets the client&apos;s expectations. He has a deep
                  understanding of project management methodologies, ensuring
                  that all team members work efficiently and effectively towards
                  the project&apos;s goals.
                </span>
                <br></br>
                <br></br>
                <span>
                  Gilad, the developer, is responsible for creating the
                  website&apos;s technical features, such as programming
                  languages, web frameworks, and databases. He is a highly
                  skilled developer with a deep understanding of Jamstack
                  technologies, using his expertise to create fast, secure, and
                  scalable websites.
                </span>
                <br></br>
                <br></br>
                <span>
                  Together, the team brings a collaborative approach to web
                  development, working closely with clients to understand their
                  unique needs and goals. They use their collective knowledge
                  and expertise to create bespoke web solutions that are
                  tailored to each client.
                </span>
                <br></br>
                <br></br>
                <span>
                  The team&apos;s focus on Jamstack web solutions emphasizes the
                  use of modern web technologies, including JavaScript
                  frameworks like React, Gatsby, or NextJS, serverless APIs, and
                  headless CMSs. These technologies allow for the creation of
                  fast, secure, and highly scalable websites that provide
                  excellent user experiences.
                </span>
                <br></br>
                <br></br>
                <span>
                  Overall, Ninja Team is a highly skilled and specialized team
                  of professionals who use their knowledge and skills to bring
                  high-end Jamstack web solutions to clients. Their focus on
                  modern web technologies, combined with their collaborative
                  approach, ensures that clients receive tailored web solutions
                  that are both effective and visually stunning.
                </span>
                <br></br>
                <br></br>
                <span>&quot;ChatGPT - AI&quot;</span>
                <br></br>
              </p>
            </div>
            <div className="home-links">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="button-link button"
              >
                <span>Follow us on Twitter</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-arrow"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2 button-link button"
              >
                <span>Join us on Discord</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-arrow1"
                />
              </a>
            </div>
          </div>
        </section>
        <div>
          <Script
            html={`<style>
/* Gray Scale */
.hover08 figure img {
	-webkit-filter: grayscale(100%);
	filter: grayscale(100%);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.hover08 figure:hover img {
	-webkit-filter: grayscale(0);
	filter: grayscale(0);
}
</style>`}
          ></Script>
        </div>
        <div className="hover08 hoverimg">
          <figure className="home-figure">
            <img
              alt="image"
              src="/angular-200h.webp"
              className="home-image03"
            />
          </figure>
          <figure className="home-figure1">
            <img alt="image" src="/strapi-200h.webp" className="home-image04" />
          </figure>
          <figure className="home-figure2">
            <img alt="image" src="/react-200h.png" className="home-image05" />
          </figure>
          <figure className="home-figure3">
            <img alt="image" src="/ghost-200h.png" className="home-image06" />
          </figure>
          <figure className="home-figure4">
            <img alt="image" src="/vuejs-200h.png" className="home-image07" />
          </figure>
          <figure className="home-figure5">
            <img alt="image" src="/nuxt-200h.png" className="home-image08" />
          </figure>
          <figure className="home-figure6">
            <img alt="image" src="/nextjs-200h.png" className="home-image09" />
          </figure>
          <figure className="home-figure7">
            <img
              alt="image"
              src="/gatsbyjs-200h.png"
              className="home-image10"
            />
          </figure>
        </div>
        <section id="go" className="home-cards">
          <div className="home-row">
            <div className="home-card">
              <img
                alt="image"
                src="/shirly-200h.webp"
                className="home-avatar"
              />
              <div className="home-main">
                <div className="home-content1">
                  <h2 className="home-header1">Shirly N. Marton</h2>
                  <p className="home-description2">
                    <span>
                      Brand &amp; Web designer, UI consultant and awesome.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>Experience: 11y +</span>
                    <br></br>
                    <span>Software expert in:</span>
                    <br></br>
                    <span>Adobe creative, PS, AI</span>
                    <br></br>
                    <span>Figma, Midjourney,</span>
                    <br></br>
                    <span>
                      ChatGPT and more.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      Consultations in:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      Brand identity, UI web-APP flow, Mockups, Strategic brand
                      awareness and Technological AI implementation for content.
                    </span>
                    <br></br>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
            <div className="home-card1">
              <img alt="image" src="/boaz-200h.webp" className="home-avatar1" />
              <div className="home-main1">
                <div className="home-content2">
                  <h2 className="home-header2">Boaz Glick</h2>
                  <p className="home-description3">
                    <span className="home-text47">
                      Marketing Analysis - research and Agile Project
                      Management.
                    </span>
                    <br className="home-text48"></br>
                    <span className="home-text49">Experience: 12y +</span>
                    <br className="home-text50"></br>
                    <span className="home-text51">Programming Languages:</span>
                    <br className="home-text52"></br>
                    <span className="home-text53">PHP, JAVASCRIPT</span>
                    <br className="home-text54"></br>
                    <span className="home-text55">Web development:</span>
                    <br className="home-text56"></br>
                    <span className="home-text57">HTML5, CSS3.</span>
                    <br className="home-text58"></br>
                    <span className="home-text59">
                      Drive Business Growth and Success with Personalized
                      Consultations- Business Consultations for Digital
                      Automation and Web Development, UX/UI.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-container3">
              <img
                alt="image"
                src="/2099419-200h1-200h.webp"
                className="home-image11"
              />
            </div>
            <div className="home-row1">
              <div className="home-main2">
                <div className="home-content3">
                  <h2 className="home-header3">
                    <br></br>
                    <span>Gilad Levi</span>
                  </h2>
                  <p className="home-description4">
                    <span>Software &amp; Web Developer</span>
                    <br></br>
                    <span>Experience: 20y +</span>
                    <br></br>
                    <span>Programming Languages:</span>
                    <br></br>
                    <span>C, C++, Ruby, Python, Javascript, PHP, Go.</span>
                    <br></br>
                    <span>Web Tech:</span>
                    <br></br>
                    <span>HTML5, CSS3, SASS, LESS.</span>
                    <br></br>
                    <span>Web Frameworks:</span>
                    <br></br>
                    <span>
                      Dejango, Ruby on Rails, Vue.js, Express.js, Backbone.js,
                      GraphQL, Node.js, Socket.io, Bootstrap, SQL, Ionic,
                      WordPress, Drupal.
                    </span>
                    <br></br>
                    <span>C++ Frameworks:</span>
                    <br></br>
                    <span>Openframeworks, POCO, ASIO.</span>
                    <br></br>
                    <span>Libraries:</span>
                    <br></br>
                    <span>jQuery.</span>
                  </p>
                </div>
              </div>
              <img
                alt="image"
                src="/group%202262.svg"
                className="home-image12"
              />
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <Link href="/">
            <a className="home-link3">
              <img
                alt="image"
                src="/path15-200h.webp"
                className="home-image13"
              />
            </a>
          </Link>
          <div className="home-div1">
            <Script
              html={`<div class="years">
© <span id="year"></span>
<script>
    document.getElementById("year").innerHTML = new Date().getFullYear();
</script>
</div>
<style>
    .years{
    color:white;
    font-size: 24px;
    font-family: 'Khand', sans-serif;
    font-weight: 400;
    }
</style>
`}
            ></Script>
          </div>
          <span className="home-copyright">
            {' '}
            Ninja Team. All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #27272d;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-link {
            display: contents;
          }
          .home-image {
            width: 80px;
            filter: invert();
            object-fit: cover;
            text-decoration: none;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-nav {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            color: #ffffff;
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .home-button {
            color: rgb(255, 255, 255);
          }
          .home-button1 {
            color: rgb(255, 255, 255);
          }
          .home-button2 {
            color: rgb(255, 255, 255);
          }
          .home-button3 {
            color: rgb(255, 255, 255);
          }
          .home-button4 {
            color: rgb(255, 255, 255);
          }
          .home-btn-group {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image01 {
            width: 100px;
            object-fit: cover;
          }
          .home-image02 {
            width: 100px;
            object-fit: cover;
          }
          .home-view {
            font-size: 22px;
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text01 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text03 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-heading {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            font-size: 28px;
            max-width: 800px;
            text-align: center;
            line-height: 36px;
          }
          .home-buttons {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-view1 {
            font-size: 22px;
            text-decoration: none;
          }
          .home-learn {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-description {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-divider-image {
            width: 100%;
            object-fit: cover;
          }
          .home-description1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-paragraph {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 35px;
            line-height: 60px;
          }
          .home-links {
            width: 100%;
            display: none;
            align-items: stretch;
            flex-direction: column;
          }
          .home-arrow {
            width: 25px;
            object-fit: cover;
          }
          .home-link2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            text-decoration: none;
            border-top-width: 0px;
          }
          .home-arrow1 {
            width: 25px;
            object-fit: cover;
          }
          .home-figure {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image03 {
            width: 200px;
            object-fit: cover;
            padding-right: var(--dl-space-space-unit);
          }
          .home-figure1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image04 {
            width: 200px;
            object-fit: cover;
            padding-right: var(--dl-space-space-unit);
          }
          .home-figure2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image05 {
            width: 200px;
            object-fit: cover;
            padding-right: var(--dl-space-space-unit);
          }
          .home-figure3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image06 {
            width: 200px;
            object-fit: cover;
            padding-right: var(--dl-space-space-unit);
          }
          .home-figure4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image07 {
            width: 200px;
            object-fit: cover;
            padding-right: var(--dl-space-space-unit);
          }
          .home-figure5 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image08 {
            width: 200px;
            object-fit: cover;
            padding-right: var(--dl-space-space-unit);
          }
          .home-figure6 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image09 {
            width: 200px;
            object-fit: cover;
            padding-right: var(--dl-space-space-unit);
          }
          .home-figure7 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image10 {
            width: 200px;
            object-fit: cover;
            padding-right: var(--dl-space-space-unit);
          }
          .home-cards {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-row {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-card {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #000000;
          }
          .home-avatar {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border-radius: 100px;
          }
          .home-main {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header1 {
            color: rgb(255, 255, 255);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description2 {
            color: rgba(255, 255, 255, 0.8);
            width: 100%;
            font-size: 35px;
            max-width: 400px;
          }
          .home-card1 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #ffcf77;
          }
          .home-avatar1 {
            width: 200px;
            height: 200px;
            border-radius: 100px;
          }
          .home-main1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header2 {
            color: rgb(0, 0, 0);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description3 {
            color: rgb(0, 0, 0);
            width: 100%;
            font-size: 35px;
            max-width: 400px;
          }
          .home-card2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #8fa7df;
          }
          .home-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-image11 {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border-radius: 100px;
          }
          .home-row1 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-main2 {
            gap: var(--dl-space-space-threeunits);
            width: 1920px;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header3 {
            color: rgb(0, 0, 0);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description4 {
            color: rgb(0, 0, 0);
            width: 100%;
            font-size: 35px;
            max-width: 400px;
          }
          .home-image12 {
            width: 50%;
            object-fit: cover;
          }
          .home-footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-link3 {
            display: contents;
          }
          .home-image13 {
            width: 100px;
            filter: invert();
            object-fit: cover;
            text-decoration: none;
          }
          .home-div1 {
            color: white;
            height: 24px;
            margin-top: var(--dl-space-space-twounits);
            margin-left: var(--dl-space-space-threeunits);
          }
          .home-copyright {
            color: rgb(255, 255, 255);
            width: 100%;
            height: 24px;
            font-size: 24px;
            margin-top: var(--dl-space-space-twounits);
            margin-left: 3.5px;
          }
          @media (max-width: 991px) {
            .home-desktop-menu {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-button5 {
              display: flex;
              padding: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .home-logo {
              color: #000000;
            }
            .home-row {
              flex-direction: column;
            }
            .home-card {
              width: 100%;
            }
            .home-card1 {
              width: 100%;
            }
            .home-description3 {
              width: 498px;
            }
            .home-row1 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-heading {
              gap: var(--dl-space-space-unit);
            }
            .home-header {
              font-size: 36px;
              max-width: 70%;
              line-height: 43px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-description {
              gap: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-description1 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content {
              gap: var(--dl-space-space-unit);
            }
            .home-paragraph {
              font-size: 20px;
              line-height: 30px;
            }
            .home-cards {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-card {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-main {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header1 {
              font-size: 24px;
            }
            .home-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-card1 {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-main1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header2 {
              font-size: 24px;
            }
            .home-description3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-text47 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-text48 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-text49 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-text50 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-text51 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-text52 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-text53 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-text54 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-text55 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-text56 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-text57 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-text58 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-text59 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-card2 {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-row1 {
              gap: var(--dl-space-space-twounits);
            }
            .home-main2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header3 {
              font-size: 24px;
            }
            .home-description4 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-footer {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-navbar {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-avatar {
              width: 100px;
              height: 100px;
              border-radius: 100px;
            }
            .home-avatar1 {
              width: 100px;
              height: 100px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
