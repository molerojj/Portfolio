import { DiCss3, DiHtml5, DiJavascript, DiReact, SiBootstrap, SiRedux, SiPostgresql, DiNodejsSmall, SiSequelize } from './SkillsData'
import { BsWordpress } from 'react-icons/bs'
import rick from '../Images/rym.png'
import pets from '../Images/pets.png'
import gameverse from '../Images/gameverse.png'
import nasa from '../Images/nasa.png'
import weather from '../Images/weather.png'
import lcl from '../Images/lcl.png'
import neomeisters from '../Images/neomeisters.png'
import zipcode from '../Images/zipcode.png'
import expresos from '../Images/expresos.png'
import wedding from '../Images/boda.jpg'

export const projectsData = [
  {
    id: 10,
    type: 'frontend',
    title: 'Landing Page Boda Jack & Yeldy',
    image: `${wedding}`,
    deploy: 'https://weddingbettertogether.com/',
    github: 'https://github.com/molerojj/wedding-sister',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />,],
    description: 'Invitacion para boda',
    newProject: true
  },
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
  },
  {
    id: 3,
    type: 'frontend',
    title: 'Nasa App',
    image: `${nasa}`,
    deploy: 'https://nasa-app-rho.vercel.app/',
    github: 'https://github.com/molerojj/Nasa-App',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <SiBootstrap />, <DiReact />],
    description: 'Consumo de API de la nasa mostrando Foto del dia + descripción.',
    newProject: false
  },
  {
    id: 5,
    type: 'frontend',
    title: 'Weather App',
    image: `${weather}`,
    deploy: 'https://jm-weather-app-vite-react.vercel.app/',
    github: 'https://github.com/molerojj/weather-app-vite-react',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <DiReact />],
    description: 'Aplicación sobre el clima. Consumo Api Weather',
    newProject: true
  },
  {
    id: 6,
    type: 'wordpress',
    title: 'E-Commerce LCL SHIPPING',
    image: `${lcl}`,
    deploy: 'https://www.lclshippinginc.com/',
    github: 'https://www.lclshippinginc.com/',
    technologies: [<BsWordpress />],
    description: 'Landing y Tienda Online para cliente en EEUU.',
    newProject: false
  },
  {
    id: 7,
    type: 'wordpress',
    title: 'Landing Page Neomeisters',
    image: `${neomeisters}`,
    deploy: 'https://www.neomeisters.com/',
    github: 'https://www.neomeisters.com/',
    technologies: [<BsWordpress />],
    description: 'Cliente: Agencia Digital.',
    newProject: false
  },
  {
    id: 8,
    type: 'wordpress',
    title: 'Landing Page Zip Code Band',
    image: `${zipcode}`,
    deploy: 'https://zipcodeband.com/',
    github: 'https://zipcodeband.com/',
    technologies: [<BsWordpress />],
    description: 'Cliente: Banda de Rock latina.',
    newProject: false
  },
  {
    id: 9,
    type: 'wordpress',
    title: 'Landing Page Expresos de Venezuela',
    image: `${expresos}`,
    deploy: 'https://dev.expresosdevenezuela.com/',
    github: 'https://dev.expresosdevenezuela.com/',
    technologies: [<BsWordpress />],
    description: 'Cliente: Empresa de transporte ejecutivo.',
    newProject: true
  }
]
