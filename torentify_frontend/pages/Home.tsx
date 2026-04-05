import React from 'react';
import HeroSlider from '../components/HeroSlider';
import LogoTicker from '../components/LogoTicker';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Torentify - Where Talent Meets Opportunity</title>
        <meta name="description" content="Torentify is a smart, modern job portal connecting ambitious professionals with forward-thinking companies. Find jobs, hire talent, and grow faster with Torentify." />
        <meta
          name="keywords"
          content="remote jobs, work from home jobs, online jobs, global remote jobs,remote software developer jobs, remote marketing jobs, remote design jobs, remote customer support jobs, remote sales jobs, remote data science jobs,remote IT jobs, remote jobs USA, remote jobs Europe,  remote jobs Canada, remote jobs UK, remote jobs for foreigners,remote tech jobs worldwide,high paying remote jobs,remote jobs for beginners 2026,top remote job platforms"
        />
        <meta name="robots" content="index, follow" />
         {/* Open Graph */}
      <meta property="og:title" content="Torentify - Where Talent Meets Opportunity"  />
      <meta property="og:site_name" content="Torentify" />
      <meta property="og:description" content="Find jobs, hire besttalent, and grow faster with Torentify." />
      <meta property="og:type" content="website" />
    <link rel="canonical" href="https://torentify.com/" />

      </Helmet>
      <main className="dark:bg-gray-950 transition-colors duration-300">

        {/* Hero Section */}
        <HeroSlider />

        {/* Logo Ticker */}
        <LogoTicker />

        {/* About Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">

              {/* Image */}
              <div className="flex-1 w-full">
                <img
                  src="https://picsum.photos/id/20/800/600"
                  alt="About Torentify"
                  className="rounded-xl md:rounded-2xl lg:rounded-3xl shadow-xl w-full h-auto"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">

                <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs sm:text-sm">
                  About Torentify
                </h2>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight">
                  We believe the future of talent is borderless.
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg">
                  Torentify connects global professionals with companies hiring remotely.
                  We simplify the discovery process so you can focus on building your career.
                </p>

                <div className="pt-2 md:pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center text-blue-600 font-bold text-sm md:text-base hover:translate-x-1 md:hover:translate-x-2 transition-transform"
                  >
                    Read our story
                    <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-950">

          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            {/* Heading */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10 md:mb-12">

              <div>
                <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">
                  Our Blog
                </h2>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
                  Work Related Insights
                </h3>
              </div>

              <Link
                to="/blog"
                className="text-blue-600 font-bold text-sm md:text-base hover:underline"
              >
                View all posts
              </Link>

            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

              {BLOG_POSTS.slice(0, 3).map((post) => (

                <article
                  key={post.id}
                  className="bg-white dark:bg-gray-900 rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
                >

                  <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4 md:p-6">

                    <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-600 font-bold text-sm"
                    >
                      Read more →
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

      </main>
    </>
  );
};

export default Home;