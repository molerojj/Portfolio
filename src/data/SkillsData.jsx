import {
  DiJavascript,
  DiCss3,
  DiHtml5,
  DiReact,
  DiNodejsSmall
} from 'react-icons/di'
import { SiBootstrap, SiPostgresql, SiRedux, SiSequelize } from 'react-icons/si'
import { BsGit, BsWordpress } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { TbBrandJavascript } from 'react-icons/tb'
import { FiFigma } from 'react-icons/fi'

const skills = [
  {
    skill: 'Wordpress',
    color: '#ff6a00',
    icon: <BsWordpress />,
    inProcess: false
  },
  {
    skill: 'Figma',
    color: '#ff6a00',
    icon: <FiFigma />,
    inProcess: false
  },
  {
    skill: 'HTML',
    color: '#ff6a00',
    icon: <DiHtml5 />,
    inProcess: false
  },
  {
    skill: 'CSS',
    color: '#0072ff',
    icon: <DiCss3 />,
    inProcess: false
  },
  {
    skill: 'Javascript',
    color: '#d8ff00',
    icon: <TbBrandJavascript />,
    inProcess: false
  },
  {
    skill: 'Boostrap',
    color: '#9100ff',
    icon: <SiBootstrap />,
    inProcess: false
  },
  {
    skill: 'React',
    color: '#3ec8fd',
    icon: <DiReact />,
    inProcess: false
  },
  {
    skill: 'Redux',
    color: '#573C83',
    icon: <SiRedux />,
    inProcess: false
  },
  {
    skill: 'Node js',
    color: '#019722',
    icon: <DiNodejsSmall />,
    inProcess: false
  },
  {
    skill: 'PostgreSQL',
    color: '#005c83',
    icon: <SiPostgresql />,
    inProcess: false
  },
  {
    skill: 'Git',
    color: '#ff3b00',
    icon: <BsGit />,
    inProcess: false
  },
  {
    skill: 'GitHub',
    color: '#ffebeb',
    icon: <AiFillGithub />,
    inProcess: false
  },
  {
    skill: 'Sequelize',
    color: '#ffebeb',
    icon: <SiSequelize />,
    inProcess: false
  }
]

export {
  skills,
  DiJavascript,
  DiCss3,
  DiHtml5,
  DiReact,
  SiBootstrap,
  SiRedux,
  SiPostgresql,
  DiNodejsSmall,
  SiSequelize
}
