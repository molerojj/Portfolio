import {
  DiJavascript,
  DiCss3,
  DiHtml5,
  DiReact,
  DiNodejsSmall
} from 'react-icons/di'
import { SiTailwindcss, SiBootstrap, SiPostgresql, SiRedux } from 'react-icons/si'
import { BsGit } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { TbBrandJavascript } from 'react-icons/tb'

const skills = [
  {
    skill: 'Html',
    color: '#ff6a00',
    icon: <DiHtml5 />,
    inProcess: false
  },
  {
    skill: 'Css',
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
  }
]

export {
  skills,
  DiJavascript,
  DiCss3,
  DiHtml5,
  DiReact,
  SiTailwindcss
}
