import React, { useContext } from 'react'
import Context from '../../Context/Themes'

export default function AbountMe () {
  const { Themes } = useContext(Context)
  return (
    <div className='min-h-[300px] relative' id='abountme'>
      <div>
        <h2 className='py-5 sm:text-3xl text-2xl font-bold' style={{ color: Themes.text }}>Sobre mi</h2>
      </div>
      <div className='flex items-center justify-center md:flex-row flex-col'>
        <div className='flex-1'>
          <p className=' text-start font-normal sm:text-lg text-base' style={{ color: Themes.description }}>Soy Programador Fullstack con una gran pasión por la tecnología. He adquirido conocimientos y habilidades como JavaScript, HTML, CSS, React, Node JS y estoy emocionado por ponerlos en práctica para crear soluciones innovadoras y útiles. Busco un entorno de trabajo desafiante y dinámico que me permita seguir aprendiendo y creciendo como desarrollador. Disfruto trabajar en colaboración con otras personas para alcanzar objetivos comunes. Si estás buscando un programador dedicado y motivado, no dudes en ponerte en contacto conmigo. ¡Estoy emocionado de conocerlos!</p>
        </div>
      </div>
    </div>
  )
}
