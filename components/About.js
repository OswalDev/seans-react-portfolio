import React from 'react'
import Avatar from 'react-avatar'
import styles from '@/styles/About.module.css'
function About() {
  return (
    <section className="mt-8 px-20">
      <div className="flex items-center justify-between font-bold text-black text-6xl tracking-wider dark:text-white">
        About Oswaldo...
        <Avatar image={'public\images\avataaars.png'} />
      </div>
      <div>
        <p className=" my-8 tracking-wider leading-relaxed text-lg font-light">
          Hello! I'm a passionate Frontend Developer specializing in React, Nodejs,
          Express and Node. I am a Computer Science student of the University of Carabobo
          in Venezuela and more recently Software Engineer student of the University
          Polytechnic Institute "Santiago Mariño". apps in Ruby on Rails and JavaScript.
          Since then,I have been developing mainly with React and TailwindCSS. I am
          also experienced with the backend, having built sites using PostgreSQL and Ruby.
        </p>

        <p className=" my-8 tracking-wider leading-relaxed text-lg font-light">
          During my free time you can find me scuba diving 🤿, hiking 🏔,
          traveling 🐫, going to the beach 🐳, reading fiction and various
          publications about the newest technology trends and other programming
          languages, and dabbling in photography 📸.{' '}
          <a className="text-primary" href="https://github.com/OswalDev">
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default About
