import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { BsCaretRight } from "react-icons/bs";
// import { FaSpotify } from "react-icons/fa";
// import axios from "axios";

export default function About(props) {
  // const track = props.data.items[0].track.name;
  // const artists = props.data.items[0].track.artists.map(
  //   (artist) => artist.name
  // );
  return (
    <Layout>
      <section className="mt-20 w-6/7 xl:w-3/7">
        <article className="flex flex-col items-center justify-center mb-16">
          <Image
            className="rounded-full"
            src="/images/mebw.jpg"
            alt="Image of Sean OReilly"
            height={100}
            width={100}
            objectFit="cover"
            objectPosition="center"
            priority
          />
          <h1 className="font-bold text-base tracking-wider mt-6 mb-3 uppercase">
            Sean OReilly
          </h1>
          <div>
            <a
              className="uppercase text-sm text-blue-400"
              href="https://github.com/seano424"
              target="_blank"
            >
              Github
            </a>
            <span> · </span>
            <a
              className="uppercase text-sm text-blue-400"
              href="https://twitter.com/sea_oreilly"
              target="_blank"
            >
              Twitter
            </a>
            <span> · </span>
            <a
              className="uppercase text-sm text-blue-400"
              href="https://www.instagram.com/sea.oreilly/"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </article>
        <article>
          <p className="my-12">
            Frontend engineer focused on creating clean user interfaces with web
            accessibility in mind. I'm fascinated by creative UI and love to
            create visually immersive user experiences with design and code.
          </p>
          <p className="my-12">
            For the last two years, I have been mostly working on transitioning
            into the world of tech, while building projects using Javascript and
            developing web apps using React. Recently I made a switch to Next.js
            from CRA and I'm loving the experience so far.
          </p>
          <p className="my-12">
            Back in October 2020 I officially began my studies as a web
            developer by joining the team at Le Wagon Mexico, a highly rated
            full stack web development bootcamp with locations based all over
            the world. In the bootcamp we focused on building apps using Ruby on
            Rails.
          </p>
          <p className="my-12">
            Few things that I am currently learning and getting comfortable in
            are Sanity CMS and Test-Driven React application development.
          </p>
          <div className="my-12">
            <p className="mb-4">
              Here are a few technologies I've been working with lately:
            </p>
            <aside className="grid grid-cols-2">
              <div>
                <p className="flex items-center">
                  <BsCaretRight /> <span>Javascript (ES6+) </span>
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <BsCaretRight /> <span>TailwindCSS </span>
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <BsCaretRight /> <span>React </span>
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <BsCaretRight /> <span>Next</span>
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <BsCaretRight /> <span>Sanity CMS</span>
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <BsCaretRight /> <span>Ruby on Rails</span>
                </p>
              </div>
            </aside>
          </div>
        </article>
        <article className="mb-20">
          <h3 className="text-3xl font-bold my-10">Where I've worked - </h3>
          <h5 className=" font-semibold mt-5 opacity-90 text-lg">
            Frontend engineer (intern) -{" "}
            <a
              className=" hover:text-green-300 hover:underline transit duration-100 ease-linear"
              href="https://www.oddcamp.com/"
            >
              Oddcamp
            </a>
          </h5>
          <p className="mb-5 opacity-60">January 2021 - May 2021</p>
          <p className="flex items-center mb-2">
            <BsCaretRight />{" "}
            <span>
              Worked on the design and prototype of the main landing page
            </span>
          </p>
          <p className="flex items-center mb-2">
            <BsCaretRight />{" "}
            <span>
              Improved the overall SEO optimization and worked on deployements
            </span>
          </p>
          <p className="flex items-center mb-2">
            <BsCaretRight />{" "}
            <span>Implemented Google Analytics 4 and Ahoy tracking</span>
          </p>
        </article>
        {/* <article className="shadow dark:bg-white dark:text-gray-900 rounded p-4">
          <div className="flex items-center">
            <FaSpotify style={{ color: "#1AD760" }} />
            <span className="pl-1 text-xs">
              Last played: {track} by {artists[0]}
            </span>
          </div>
        </article> */}
      </section>
    </Layout>
  );
}

// export async function getStaticProps(context) {
//   const res = await axios.get(
//     "https://api.spotify.com/v1/me/player/recently-played",
//     {
//       headers: {
//         Authorization:
//           "Bearer " +
//           "BQAO6pkSA1G0Cgu220TQpYNB5L7sIPQ5G_SAQL8eh7MaEbcqgBp_vibmF_7Kw01fbaOlLfOo-o48GsE5t9muwBCMKmBVo90EUxloGhzN4fc6SjuS9onspkEWCicPPParm34BALK-AZMSGaR7DCEp", //the token is a variable which holds the token,
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     }
//   );

//   if (!res.data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data: res.data }, // will be passed to the page component as props
//   };
// }
