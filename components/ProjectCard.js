import { FaGithub } from 'react-icons/fa'
import { BiShow } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/ProjectCard.module.css'

export default function Project({ title, description, repo, site, image }) {
  return (
    <section className={`${styles.card} dark:bg-black`}>
      <div>
        <a href={site} target="_blank">
          <Image
            className={styles.cardImg}
            alt={title}
            src={image}
            layout="responsive"
            width={10}
            height={6}
          />
        </a>

        <div className={styles.cardContent}>
          <a
            title={site}
            href={site}
            aria-label={`Webite for project ${title}`}
            target="_blank"
            className={styles.cardTitleLink}
          >
            <h3 className={styles.cardTitle}>{title}</h3>

            <p className={`${styles.cardDescription} dark:text-white`}>
              {description}
            </p>
          </a>{' '}
        </div>
      </div>
      <div className={styles.cardLinks}>
        <Link href={site}>
          <a target="_blank" className={styles.link}>
            <BiShow className="text-2xl" />
            <span
              className={`${styles.cardSpan} group dark:group-hover:text-gray-100 `}
            >
              Visit Site
            </span>
          </a>
        </Link>
        <a
          href={repo}
          title={repo}
          target="_blank"
          aria-label={`Github Repo for project ${title}`}
          className={styles.link}
        >
          <span
            className={`${styles.cardSpan} group dark:group-hover:text-gray-100 `}
          >
            GitHub
          </span>{' '}
          <FaGithub className="text-2xl" />
        </a>
      </div>
    </section>
  )
}
