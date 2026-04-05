import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle =
    "Privacy Policy Torentify - Where Talent Meets Opportunity";

  const pageDescription =
    "Read the Torentify privacy policy to understand how we collect, use, and protect your information when using our remote job discovery platform.";

  const pageUrl =
    "https://torentify.com/privacy-policy";

  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <meta
          name="keywords"
          content="TorentifyJobs privacy policy, job platform privacy, remote job website privacy"
        />

        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
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
            "name": "Privacy Policy - TorentifyJobs",
            "url": "https://torentify.com/privacy-policy",
            "description":
              "Privacy policy explaining how TorentifyJobs collects and protects user data."
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-[#020617] px-4 py-12 flex justify-center">

        <div
          className="
          w-full max-w-5xl
          bg-white dark:bg-[#0f172a]
          rounded-2xl
          p-8 md:p-12
          shadow-lg dark:shadow-black/40
          border border-gray-200 dark:border-gray-800
        "
        >

          {/* Heading */}
          <h1 className="text-4xl font-black text-[#022c57] dark:text-blue-400 mb-2">
            Privacy Policy
          </h1>

          <p className="text-sm text-right text-gray-600 dark:text-gray-400 mb-6">
            Last Updated: February 2026
          </p>

          {/* Intro */}
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            At <span className="font-semibold">Torentify Jobs</span>, protecting
            your privacy is extremely important to us. This Privacy Policy
            explains how information may be collected, used, and safeguarded
            when you visit our website and explore job opportunities.
          </p>

          <Section title="1. Information We Collect">
            <p className="font-semibold mt-2">a. Personal Information</p>

            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Name, email address, and contact details</li>
              <li>Job preferences or details you voluntarily provide</li>
            </ul>

            <p className="font-semibold mt-4">b. Non-Personal Information</p>

            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>IP address and browser information</li>
              <li>Device and operating system data</li>
              <li>Usage analytics for improving website experience</li>
            </ul>
          </Section>

          <Section title="2. How We Use Information">
            <ul className="list-disc pl-6 space-y-1">
              <li>Improve the user experience on TorentifyJobs</li>
              <li>Provide job discovery tools and career resources</li>
              <li>Analyze website traffic and trends</li>
              <li>Send updates or notifications if subscribed</li>
            </ul>
          </Section>

          <Section title="3. Sharing of Information">
            <ul className="list-disc pl-6 space-y-1">
              <li>With service providers for analytics and hosting</li>
              <li>When legally required by authorities</li>
            </ul>

            <p className="mt-3">
              TorentifyJobs does not sell or trade personal information to
              third parties.
            </p>
          </Section>

          <Section title="4. User Rights">
            <ul className="list-disc pl-6 space-y-1">
              <li>Access or update personal information</li>
              <li>Request deletion of data</li>
              <li>Unsubscribe from communication emails</li>
            </ul>
          </Section>

          <Section title="5. Cookies">
            TorentifyJobs may use cookies to enhance user experience,
            personalize content, and analyze traffic.
          </Section>

          <Section title="6. Data Security">
            We take appropriate security measures to protect user data,
            although no online platform can guarantee absolute security.
          </Section>

          <Section title="7. Third-Party Links">
            Our website may contain links to external websites. We are not
            responsible for the privacy policies of those sites.
          </Section>

          <Section title="8. Policy Updates">
            This policy may be updated periodically. Changes will be posted
            on this page with an updated revision date.
          </Section>

          <Section title="9. Contact Us">
            If you have questions regarding this policy, contact us at:
            <br />
            <span className="font-semibold">
              mail@torentifyjobs.com
            </span>
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

/* Reusable Section */
const Section = ({ title, children }) => (
  <div className="mt-8 text-gray-700 dark:text-gray-300 leading-relaxed">
    <h2 className="text-2xl font-extrabold mb-2 text-[#022c57] dark:text-blue-300">
      {title}
    </h2>
    {children}
  </div>
);

export default PrivacyPolicy;