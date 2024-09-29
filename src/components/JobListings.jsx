import React from 'react'
import jobs from '../../MockBackend/jobs.json'
import JobListing from './JobListing';
export const JobListings = () => {
  const recentJobs = jobs.slice(0, 3);
  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl  lg:container m-auto'>
        <h2 className='text-3xl font-bold text-center pb-2 text-indigo-700'>Browse Jobs</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-3'>
          {recentJobs.map((job) => (
            <JobListing key={job.id} job={job}/>
          ))}
      </div>

    </div>
    </section>
  )
}