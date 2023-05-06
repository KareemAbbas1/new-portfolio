import Head from 'next/head';
import Image from 'next/image';
import Contact from '../components/contact/Contact';
import Education from '../components/education/Education';
import Hero from '../components/hero/Hero';
import Projects from '../components/projects/Projects';
import Services from '../components/services/Services';
import Skills from '../components/skills/Skills';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { loadProjects } from '../lib/load-projects';
import { loadSkills } from '../lib/load-skills';

export async function getStaticProps() {
  try{
    const projects = await loadProjects();
    const skills = await loadSkills();
    // const res1 = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/projects`);
    // const res2 = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/skills`);

    return {
      props: {
        projects,
        skills
      }
    }
  }
  catch {
    return {
      notFound: true,
    }
  }
}
export default function Home({ onLinkClick, width, projects, skills }) {

  return (
    <>
      <Head>
        <title>Kareem Abbas Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Kareem Abbas Portfolio" />
      </Head>

      <main className={styles.main}>
        <Hero onLinkClick={onLinkClick}/>
        <Projects width={width} projects={projects}/>
        <Services />
        <Education />
        <Skills skills={skills}/>
        <Contact />
      </main>
    </>
  )
}
