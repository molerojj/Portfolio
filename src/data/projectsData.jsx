import { DiCss3, DiHtml5, DiJavascript, DiReact, SiBootstrap, SiRedux, SiPostgresql, DiNodejsSmall, SiSequelize } from './SkillsData'
import rick from '../Images/rym.png'
import pets from '../Images/pets.png'
import gameverse from '../Images/gameverse.png'

export const projectsData = [
  {
    id: 0,
    type: 'frontend',
    title: 'Rick & Morty APP',
    image: `${rick}`,
    deploy: 'https://rick-and-morty-app-nu-one.vercel.app/',
    github: 'https://github.com/molerojj/rick-and-morty-app-react',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <DiReact />, <SiRedux />],
    description: 'Aplicación que muestra cards de los personajes de Rick & Morty.',
    newProject: false
  },
  {
    id: 1,
    type: 'frontend',
    title: 'Gameverse',
    image: `${gameverse}`,
    deploy: 'https://jonathan-videogames-project.vercel.app/',
    github: 'https://github.com/molerojj/Deploy-Videogames-Project',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <DiReact />, <SiRedux />, <DiNodejsSmall />, <SiSequelize />, <SiPostgresql />],
    description: 'Cartelera de videojuegos.',
    newProject: false
  },
  {
    id: 2,
    type: 'fullstack',
    title: 'PetsAmerica',
    image: `${pets}`,
    deploy: 'https://pf-henry-one.vercel.app/',
    github: 'https://github.com/erikfille/PF-Henry',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <SiBootstrap />, <DiReact />],
    description: 'E-commerce de productos para mascotas.',
    newProject: true
  }
]
