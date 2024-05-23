import Title from './Title'
import jobs from '../data/jobs'
import Experience from './Experience';

const Resume = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-5 h-screen">
      <Title text="Experience" />
      <div className="flex flex-wrap pt-5 w-1/2 justify-center">
        {jobs.map((job, index) => {
          return (
            <Experience
              text={job.text}
              date={job.date}
              title={job.title}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Resume