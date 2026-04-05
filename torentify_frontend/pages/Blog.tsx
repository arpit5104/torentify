import React from "react";
import { BLOG_POSTS } from "../constants";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Blog = () => {

  return (

    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14 lg:py-16 dark:bg-gray-950 transition-colors duration-300">

      {/* SEO */}
      <Helmet>

        <title>Torentify Blog | Career Advice, Job Guides and Industry Insights</title>

        <meta
          name="description"
          content="Read the latest career advice, job search strategies, and industry insights on the Torentify Blog. Stay informed and grow your career with expert guidance."
        />

        <meta
          name="keywords"
          content="Torentify blog, career advice, job search tips, career guides, job insights, hiring trends"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://torentify.com/blog" />

        <meta property="og:title" content="Torentify Blog | Career Advice and Job Insights" />
        <meta property="og:description" content="Explore career guides, job search tips, and industry insights from Torentify." />
        <meta property="og:type" content="website" />

      </Helmet>


      {/* Heading */}
      <div className="mb-10 md:mb-14">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 md:mb-6">
          Torentify Career Blog
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Expert articles, career advice, and industry insights from the Torentify blog to help you grow your professional journey.
        </p>

      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">

        {BLOG_POSTS.map((post) => (

          <article
            key={post.id}
            className="group bg-white dark:bg-gray-900 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >

            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-4 md:p-6">

              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full">
                Torentify Blog
              </span>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-3 mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>

              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4 md:mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-sm md:text-base font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
              >
                Read Article
              </Link>

            </div>

          </article>

        ))}

      </div>
    </div>

  );
};

export default Blog;