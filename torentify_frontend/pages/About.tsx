import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const About = () => {

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = "About Torentify - Where Talent Meets Opportunity";

  const pageDescription =
    "Learn about TorentifyJobs, a trusted global job discovery platform helping users find verified remote jobs and career opportunities across the US, UK, and worldwide markets.";

  const pageUrl = "https://torentify.com/about";

  const imageUrl =
    "https://picsum.photos/id/42/1200/630";

  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="remote jobs, online jobs, work from home jobs, torentify jobs, global job search platform" />

        <link rel="canonical" href={pageUrl} />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {/* <meta property="og:image" content={imageUrl} /> */}
        <meta property="og:url" content={pageUrl} />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {/* <meta name="twitter:image" content={imageUrl} /> */}

        {/* Structured Data for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TorentifyJobs",
            "url": "https://torentifyjobs.com",
            "logo": "https://torentifyjobs.com/logo.png",
            "description":
              "TorentifyJobs is a global job discovery platform helping job seekers find verified remote jobs and career opportunities.",
            "sameAs": [
              "https://twitter.com",
              "https://linkedin.com",
              "https://facebook.com"
            ]
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-24">

        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">

          <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-gray-100">
            About TorentifyJobs
          </h1>

          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            A Trusted Global Job Discovery Platform
          </h2>

          <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            TorentifyJobs is a modern job discovery platform designed to help
            professionals find verified remote jobs, online work opportunities,
            and global career options directly from official employer websites.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">

          {/* Image */}
          <img
            src="https://picsum.photos/id/42/800/600"
            alt="Remote work opportunities and global job search"
            className="rounded-3xl shadow-2xl dark:shadow-black/50"
            loading="lazy"
          />

          {/* Text Content */}
          <div className="space-y-10">

            {/* Mission */}
            <div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Our Mission
              </h3>

              <ul className="space-y-3 text-gray-600 dark:text-gray-300">

                <li className="flex gap-2">
                  <span>🔹</span>
                  Present verified job opportunities directly from official employer career pages
                </li>

                <li className="flex gap-2">
                  <span>🔹</span>
                  Help job seekers discover remote work and global opportunities
                </li>

                <li className="flex gap-2">
                  <span>🔹</span>
                  Provide a transparent job search experience without storing resumes
                </li>

              </ul>

            </div>

            {/* Community */}
            <div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                A Global Community
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Each job listed on TorentifyJobs includes a clear Apply button
                that redirects users directly to the employer's official career
                website. This ensures that candidates apply securely and directly
                where hiring decisions are made.
              </p>

            </div>

            {/* Info */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              In addition to job listings, TorentifyJobs publishes career
              resources, remote work guides, and job search strategies to help
              candidates improve their chances of landing their next opportunity.
            </p>

            {/* Commitment */}
            <div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Our Commitment
              </h3>

              <ul className="space-y-3 text-gray-600 dark:text-gray-300">

                <li className="flex gap-2">
                  <span>🔹</span>
                  Honest job discovery platform
                </li>

                <li className="flex gap-2">
                  <span>🔹</span>
                  No resume storage or personal data collection
                </li>

                <li className="flex gap-2">
                  <span>🔹</span>
                  Transparent apply process
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default About;