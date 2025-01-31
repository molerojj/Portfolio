import React, { Suspense, useContext, useState, useRef } from 'react'
import { projectsData } from '../../data/projectsData'
import Context from '../../Context/Themes'
import BlobBlur from '../BlobBlur/BlobBlur'
import Titles from '../Title'
import './index.css'
const CardProject = React.lazy(() => import('../CardProject'))

const typeProject = [
  {
    type: 'UI/UX'
  },
  {
    type: 'wordpress'
  },
  {
    type: 'frontend'
  },
  {
    type: 'fullstack'
  }
]

export default function Projects () {
  const { Themes } = useContext(Context)
  const [typeSelected, setTypeSelected] = useState('UI/UX')
  const refElementProjectSelected = useRef()

  const handleChangeSelected = (e, type) => {
    e.preventDefault()
    setTypeSelected(type)
  }

  const projectSelected = projectsData.filter(project => project.type === typeSelected)

  const handleMouseEnter = (e) => {
    refElementProjectSelected.current.style = `left: ${e.target.offsetLeft}px; width: ${e.target.offsetWidth}px; opacity: 1;`
  }
  const handleMouseLeave = (e) => {
    refElementProjectSelected.current.style = 'opacity: 0;'
  }
  return (
    <div className='w-full min-h-[400px] relative mb-36' id='projects'>
      <div className='content-project relative z-[1]'>
        <Titles Themes={Themes} title='Proyectos' />
        <div className='relative'>
          <div className='flex items-center'>
            {
              typeProject.map(({ type }) => (
                <a
                  href='#' key={type} className={`capitalize sm:text-base text-sm ${typeSelected === type ? 'border-b-2 border-b-[#f5d2b3]' : null} font-medium typesRamas`} style={{ color: Themes.text }} onMouseEnter={(e) => handleMouseEnter(e)}
                  onMouseLeave={handleMouseLeave} onClick={(e) => handleChangeSelected(e, type)}
                >{type}
                </a>
              ))
            }
          </div>
          <div className='borderProject' ref={refElementProjectSelected} style={{ backgroundColor: Themes.cardSkill }} />
        </div>
        <div className='flex flex-wrap lg:justify-start justify-center'>
          {
    projectSelected.length > 0
      ? projectSelected.map(data => (
        <Suspense key={data.id} fallback={<h3>Cargando</h3>}>
          <CardProject data={data} themes={Themes} />
        </Suspense>
      ))
      : <h4 className='text-sm font-normal mt-2' style={{ color: Themes.text }}>No se han creado proyectos para esta sección aun.</h4>
  }
        </div>
      </div>
      <BlobBlur positionStyles={{ top: '0', left: '0', height: '600px', width: '45%', opacity: '0.6' }} />
    </div>
  )
}
