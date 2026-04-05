import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import toast from "react-hot-toast";
const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await axios.post(
        "https://backend-torentify.onrender.com/api/contact",
        formData
      );

      if (response.status === 200 || response.status === 201) {

        toast.success("Message sent successfully!");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        });

      }

    } catch (error: any) {

      console.error(error);

      toast.error(
        error?.response?.data?.message || "Something went wrong"
      );

    } finally {
      setLoading(false);
    }

  };


  const pageTitle =
    "Contact Torentify - Where Talent Meets Opportunity";

  const pageDescription =
    "Contact TorentifyJobs for support, questions, or partnership opportunities. Our team helps job seekers find verified remote jobs and global career opportunities.";

  const pageUrl = "https://torentify.com/contact";

  const imageUrl =
    "https://picsum.photos/id/42/1200/630";

  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <meta
          name="keywords"
          content="contact torentify jobs, remote jobs support, job search help, work from home support"
        />

        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {/* <meta property="og:image" content={imageUrl} /> */}
        <meta property="og:url" content={pageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {/* <meta name="twitter:image" content={imageUrl} /> */}

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Torentify",
            "url": "https://torentify.com/contact",
            "description":
              "Contact Torentify Jobs to get assistance with remote job opportunities and career resources.",
            "publisher": {
              "@type": "Organization",
              "name": "Torentify"
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* LEFT CONTENT */}
          <div>

            <h1 className="text-5xl font-black mb-8 text-gray-900 dark:text-gray-100">
              Contact Torentify
            </h1>

            <p className="text-xl mb-12 text-gray-600 dark:text-gray-300">
              Have questions about latest jobs or hiring global talent? Our team
              is here to help you navigate the world of remote work and online
              career opportunities.
            </p>

            <div className="space-y-8">

              {/* Email */}
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 flex-shrink-0">

                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                </div>

                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                    Email us
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300">
                    mail@torentify.com
                  </p>
                </div>
              </div>

              {/* Chat */}
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 flex-shrink-0">

                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>

                </div>

                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                    Live Chat
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300">
                    Average response time: 2 hours
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* FORM CARD */}
          <div className="bg-white dark:bg-[#0f172a] p-8 md:p-12 rounded-[2rem] border border-gray-200 dark:border-gray-800 shadow-2xl dark:shadow-black/40">

            <form className="space-y-6" onSubmit={handleSubmit}>

              <div className="grid grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                    className="w-full px-4 py-3 rounded-xl outline-none bg-gray-50 dark:bg-[#020617] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl outline-none bg-gray-50 dark:bg-[#020617] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

              </div>

              <div className="space-y-2">

                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl outline-none bg-gray-50 dark:bg-[#020617] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div className="space-y-2">

                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  Message
                </label>

                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 rounded-xl resize-none outline-none bg-gray-50 dark:bg-[#020617] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                />

              </div>

               <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-black text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg shadow-blue-200/50 flex items-center justify-center gap-2"
              >

                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>

                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}

              </button>

            </form>


          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;