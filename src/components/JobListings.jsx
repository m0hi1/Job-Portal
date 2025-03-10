import { React, useState, useEffect } from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner'
export const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error)
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [
    // console.log('Loading..')
  ])
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl  lg:container m-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-indigo-700">

          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3">
          {loading ? (<Spinner />)
            : (
              <>
                {jobs.map((job) => (
                  <JobListing key={job.id} job={job} />
                ))}
              </>
            )
            }
        </div>
      </div>
    </section>
  )
}
