import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

type Job = {
  id: string;
  title: string;
  companyName: string;
  location: string;
  country: string;
};

const Jobs = () => {

  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const selectedCountry = searchParams.get("location");

  useEffect(() => {

    const fetchJobs = async () => {

      try {

        const apiBaseUrl = import.meta.env.VITE_API_URL || "";
        const res = await fetch(`${apiBaseUrl}/jobs/getJobs`);
        const data = await res.json();

        const jobList = Array.isArray(data) ? data : data.data;

        localStorage.setItem("jobs_backup", JSON.stringify(jobList));

        setJobs(jobList.slice(0, 15));

        setTimeout(() => {
          setJobs(jobList);
        }, 500);

      } catch (error) {

        console.error(error);

        const stored = localStorage.getItem("jobs_backup");

        if (stored) {
          const jobList = JSON.parse(stored);
          setJobs(jobList);
        }

      } finally {

        setLoading(false);

      }

    };

    fetchJobs();

  }, []);

  useEffect(() => {

    if (!selectedCountry) {
      setFilteredJobs(jobs);
      return;
    }

    const filtered = jobs.filter(
      (job) =>
        job.country &&
        job.country.toLowerCase() === selectedCountry.toLowerCase()
    );

    setFilteredJobs(filtered);

  }, [selectedCountry, jobs]);

  return (

    <div className="max-w-7xl mx-auto px-4 py-12
                    text-gray-900 dark:text-gray-100
                    bg-white dark:bg-gray-950 min-h-screen">

      {/* SEO META TAGS FOR TORENTIFY */}
      <Helmet>

        <title>
          {selectedCountry
            ? `Torentify Jobs in ${selectedCountry} | Latest Job Opportunities`
            : "Torentify Job Portal | Latest Jobs Worldwide"}
        </title>

        <meta
          name="description"
          content="Torentify helps you discover the latest job opportunities from companies across the world. Browse jobs by location, company, and industry on Torentify."
        />

        <meta
          name="keywords"
          content="Torentify jobs, job portal, job listings, latest jobs, international jobs, Torentify careers, hiring companies"
        />

        <meta name="robots" content="index, follow" />

       <link rel="canonical" href={selectedCountry? `https://torentify.com/jobs?location=${selectedCountry.toLowerCase()}`: "https://torentify.com/jobs"}/>

        {/* Open Graph */}
        <meta property="og:title" content="Torentify Job Portal | Latest Job Opportunities" />
        <meta property="og:description" content="Explore thousands of job opportunities worldwide on Torentify." />
        <meta property="og:type" content="website" />

      </Helmet>

      <h1 className="text-4xl font-black mb-10 text-center
                     text-gray-900 dark:text-white">

        {selectedCountry
          ? `Torentify Jobs in ${selectedCountry.toUpperCase()} Country`
          : "Torentify Jobs Worldwide Countries"}

      </h1>

      {loading && (
        <p className="text-center text-gray-600 dark:text-gray-400">
          Loading Torentify jobs...
        </p>
      )}

      <div className="grid gap-6">

        {filteredJobs.map((job) => (

          <div
            key={job.id}
            className="bg-white dark:bg-gray-900
                       border border-gray-200 dark:border-gray-700
                       p-6 rounded-xl
                       hover:shadow-lg dark:hover:shadow-2xl
                       transition duration-200"
          >

            {/* STRUCTURED DATA FOR GOOGLE JOB INDEXING */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "JobPosting",
                  title: job.title,
                  hiringOrganization: {
                    "@type": "Organization",
                    name: job.companyName,
                    sameAs: "https://torentify.com"
                  },
                  jobLocation: {
                    "@type": "Place",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: job.location,
                      addressCountry: job.country
                    }
                  },
                  employmentType: "FULL_TIME",
                  datePosted: new Date().toISOString(),
                  validThrough: "2026-12-31",
                  url: `https://torentify.com/jobs/${job.id}`,
                  identifier: {
                    "@type": "PropertyValue",
                    name: "Torentify",
                    value: job.id
                  }
                })
              }}
            />

            {/* SEO FRIENDLY JOB LINK */}
            <a
              href={`/jobs/${job.id}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/jobs/${job.id}`);
              }}
              className="text-lg font-bold cursor-pointer
                         text-gray-900 dark:text-gray-100
                         hover:text-blue-600 dark:hover:text-blue-400"
            >
              {job.title}
            </a>

            <p className="mt-2 text-gray-700 dark:text-gray-300">
              <b>Company:</b> {job.companyName}
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              <b>Location:</b> {job.location}
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              <b>Country:</b> {job.country}
            </p>

          </div>

        ))}

        {!loading && filteredJobs.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No Torentify jobs found.
          </p>
        )}

      </div>

    </div>

  );

};

export default Jobs;