import Title from './Title'
import Experience from './Experience'
import jobs from '../data/jobs'
import { Parallax } from 'react-parallax'
import dunes from '../assets/dunes.jpg'

const Resume = () => {
  return (

    <Parallax bgImage={dunes}>
      <div className='flex flex-col justify-center items-center h-screen' id='resume'>
        <Title text="Experience" color='slate-100'/>
        <div className='flex flex-wrap justify-center gap-5 pt-5'>
          {jobs.map((job, index) => {
            return <Experience text={job.text} date={job.date} title={job.title} key={index} />
          })}
        </div>
      </div>
    </Parallax>
  )
}

export default Resume