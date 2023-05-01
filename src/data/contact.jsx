import { IoLogoInstagram } from 'react-icons/io'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const redes = [{
  red: 'Instagram',
  link: 'https://www.instagram.com/jonathanmolero/',
  icon: <IoLogoInstagram />
}, {
  red: 'Linkedin',
  link: 'https://www.linkedin.com/in/jonathan-molero/',
  icon: <AiFillLinkedin />
}, {
  red: 'Git Hub',
  link: 'https://github.com/molerojj',
  icon: <AiFillGithub />
}]

const methodContact = [
  {
    method: 'email',
    href: 'mailto:molerojj@gmail.com',
    title: 'molerojj@gmail.com'
  }
]

export { methodContact, redes }
