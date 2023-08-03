import { ProjectsProps } from "@/interfaces";
import { getSortedProjectsData } from "@/lib/projects";
import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export async function getStaticProps() {
  const projects = await getSortedProjectsData();

  const projectOrder = [
    'blog-list-dashboard',
    'caridosen',
    'binotify',
    'akutenang',
    'disease-detector',
    'student-id-finder',
    'piara-in'
  ]
  
  projects.sort((a, b) => {
    return projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id)
  })

  return {
    props: {
      projects,
    },
  };
}

const skills = [
  "ReactJS",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "JavaScript",
  "TypeScript",
  "Jest",
  "Cypress",
  "ChakraUI",
  "TailwindCSS",
  "Formik",
  "useSWR",
  "Docker",
  "CI/CD",
  "MongoDB",
  "MySQL",
];

export default function Home({ projects }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>Fikri Ranjabi</title>
        <meta name="description" content="Fikri Ranjabi Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col">
        <Hero />
        <div className="flex flex-col" id="#projects">
          <div className="flex flex-col" id="#skills">
            <p className="text-4xl mt-4 font-semibold"># My Skills</p>
            <div className="flex flex-col md:flex-row justify-between sm:mt-2">
              <p className="leading-[1.8rem] lg:mr-4 mt-4">
                With two years of learning frontend web development, I&apos;ve
                gained an understanding to build a production ready website
                application with the importance of reusability and scalability.
              </p>
              <div className="flex flex-wrap justify-start md:justify-end mt-4 lg:mt-0">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="justify-center bg-gray-100 px-2 py-1 m-1"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Projects projects={projects} />
      </div>
    </>
  );
}
