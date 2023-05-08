import { DiCss3, DiHtml5, DiJavascript, DiReact } from './SkillsData'
import rick from '../Images/rym.png'
import pets from '../Images/pets.png'

export const projectsData = [
  {
    id: 0,
    type: 'frontend',
    title: 'Rick & Morty APP',
    image: `${rick}`,
    deploy: 'https://rick-and-morty-app-nu-one.vercel.app/',
    github: 'https://github.com/molerojj/rick-and-morty-app-react',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <DiReact />],
    description: 'Aplicación que muestra cards de los personajes de Rick & Morty.',
    newProject: true
  },
  {
    id: 0,
    type: 'frontend',
    title: 'PetsAmerica',
    image: `${pets}`,
    deploy: 'https://pf-henry-one.vercel.app/',
    github: 'https://github.com/erikfille/PF-Henry',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <DiReact />],
    description: 'E-commerce de productos para mascotas.',
    newProject: true
  }
]
