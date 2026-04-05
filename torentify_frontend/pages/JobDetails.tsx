import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


type Job = {
  _id: string;
  title: string;
  companyName: string;
  location: string;
  description: string;
  applyUrl: string;
};

const JobDetail: React.FC = () => {

  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchJob = async () => {

      try {

        const res = await fetch(
          `https://backend-torentify.onrender.com/api/jobs/getJobById/${id}`
        );

        const data = await res.json();

        setJob(data.data || data);

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    };

    fetchJob();

  }, [id]);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-600 dark:text-gray-400">
        Loading job from Torentify...
      </p>
    );

  if (!job)
    return (
      <p className="text-center mt-10 text-gray-600 dark:text-gray-400">
        Job not found on Torentify
      </p>
    );

  const pageTitle = `${job.title} at ${job.companyName} | Torentify Job Portal`;

  const pageDescription =
    `Apply for ${job.title} at ${job.companyName}. ` +
    `Explore job opportunities and career growth with companies hiring through Torentify.`;

  return (

    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* SEO Metadata */}
      <Helmet>

        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <meta
          name="keywords"
          content={`Torentify jobs, ${job.title}, ${job.companyName} jobs, ${job.location} jobs, job opportunities`}
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href={`https://torentify.com/jobs/${job._id}`}
        />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />

      </Helmet>


      {/* Structured Data for Google Job Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: job.title,
            description: job.description,
            hiringOrganization: {
              "@type": "Organization",
              name: job.companyName,
              sameAs: "https://torentify.com"
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: job.location
              }
            },
            employmentType: "FULL_TIME",
            datePosted: new Date().toISOString(),
            validThrough: "2026-12-31",
            identifier: {
              "@type": "PropertyValue",
              name: "Torentify",
              value: job._id
            },
            url: `https://torentify.com/jobs/${job._id}`
          })
        }}
      />

      <div
        className="
          bg-white dark:bg-[#0f172a]
          border border-gray-200 dark:border-gray-800
          rounded-2xl p-8
          shadow-sm dark:shadow-black/40
        "
      >

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">

          <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100">
            {job.title}
          </h1>

          <button
            onClick={() => window.open(job.applyUrl, "_blank")}
            className="
              px-6 py-3 rounded-lg font-bold whitespace-nowrap
              bg-blue-600 hover:bg-blue-700
              text-white
              transition
            "
          > 
            Apply Now
          </button>

        </div>

        {/* Job Meta */}
        <div className="mb-6 space-y-2">

          <p className="text-sm">
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Company:
            </span>{" "}
            <span className="font-medium text-indigo-600 dark:text-indigo-400">
              {job.companyName}
            </span>
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Location:</span> {job.location}
          </p>

        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 my-6" />

        {/* Job Description */}
        <div>

          <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100">
            Job Description 
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {job.description}
          </p>

        </div>

      </div>

    </div>
  );

};

export default JobDetail;