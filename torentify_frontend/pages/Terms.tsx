import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Terms = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = "Terms & Conditions Torentify - Where Talent Meets Opportunity";

  const pageDescription =
    "Read the Terms and Conditions for using TorentifyJobs, a global job discovery platform providing verified remote job opportunities.";

  const pageUrl = "https://torentify.com/terms";

  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <meta
          name="keywords"
          content="TorentifyJobs terms, job platform terms, remote job website terms"
        />

        <link rel="canonical" href={pageUrl} />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms & Conditions - TorentifyJobs",
            "url": "https://torentify.com/terms",
            "description":
              "Terms and conditions explaining the rules and policies for using the TorentifyJobs job discovery platform."
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-[#020617] px-4 py-12 flex justify-center">

        <div
          className="
          w-full max-w-4xl
          bg-white dark:bg-[#0f172a]
          rounded-2xl
          p-8 md:p-12
          shadow-lg dark:shadow-black/40
          border border-gray-200 dark:border-gray-800
        "
        >

          {/* Heading */}
          <h1 className="text-4xl font-black mb-6 text-blue-600 dark:text-blue-400">
            Terms & Conditions
          </h1>

          {/* Intro */}
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            Welcome to <span className="font-semibold">TorentifyJobs</span>.
            These Terms and Conditions govern your use of our website and job
            discovery services. By accessing or using our platform, you agree
            to follow these terms and all applicable laws.
          </p>

          {/* Sections */}
          <Section title="1. Use of the Website">
            You must be at least 18 years old to use the Service. By accessing
            or using TorentifyJobs, you confirm that your use of the website
            is voluntary and complies with applicable laws.
          </Section>

          <Section title="2. Content">
            All job listings and blog content on TorentifyJobs are provided for
            informational and job discovery purposes. We do not guarantee the
            accuracy or completeness of job listings and are not responsible
            for third-party content.
          </Section>

          <Section title="3. Apply Functionality">
            When you click the Apply button, you will be redirected to the
            employer’s official website. TorentifyJobs does not collect
            application data, resumes, or job submissions.
          </Section>

          <Section title="4. Links to Third-Party Sites">
            Our website may contain links to external websites. TorentifyJobs
            does not control these websites and is not responsible for their
            content or privacy policies.
          </Section>

          <Section title="5. Intellectual Property">
            All content, design, and code on this website are the intellectual
            property of TorentifyJobs. You may not reproduce, copy, or
            distribute any content without permission.
          </Section>

          <Section title="6. Changes to Terms">
            We may update these Terms from time to time. Continued use of the
            Service after updates indicates acceptance of the revised Terms.
          </Section>

          <Section title="7. Limitation of Liability">
            TorentifyJobs will not be liable for any damages arising from the
            use of the website or reliance on job listings and external links.
          </Section>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-400">
            © 2026 TorentifyJobs. All rights reserved.
          </div>

        </div>

      </div>
    </>
  );
};

/* Reusable Section Component */
const Section = ({ title, children }) => (
  <div className="mt-8">
    <h2 className="text-2xl font-extrabold mb-2 text-[#023ebe] dark:text-blue-300">
      {title}
    </h2>

    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
      {children}
    </p>
  </div>
);

export default Terms;