import React, { useContext } from 'react'
import Context from '../../Context/Themes'

export default function AbountMe () {
  const { Themes } = useContext(Context)
  return (
    <div className='min-h-[300px] relative' id='abountme'>
      <div>
        <h2 className='py-5 sm:text-3xl text-2xl font-bold' style={{ color: Themes.text }}>Sobre mí</h2>
      </div>
      <div className='flex items-center justify-center md:flex-row flex-col'>
        <div className='flex-1'>
          <p className=' text-start font-normal sm:text-lg text-base' style={{ color: Themes.description }}>Soy persona con una gran pasión por la tecnología. Tengo experiencia y habilidades en herramientas como <b>WordPress</b> y <b>Elementor</b> y <b>Figma</b>, tambien en la programacion como <b>JavaScript, HTML, CSS, React,</b> entre otros. Me encargo de crear soluciones innovadoras y utiles mantemiendome en constante aprendizaje. Disfruto trabajar en colaboración con otras personas para alcanzar objetivos comunes. Si estás buscando un desarrollador/diseñador dedicado y motivado, no dudes en ponerte en contacto conmigo. ¡Estoy emocionado de conocerlos!</p>
        </div>
      </div>
    </div>
  )
}
