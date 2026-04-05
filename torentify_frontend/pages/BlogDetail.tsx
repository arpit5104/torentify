import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BLOG_POSTS } from "../constants";
import { Helmet } from "react-helmet-async";


const BlogDetails = () => {
  const { id } = useParams();

  const post = BLOG_POSTS.find((blog) => blog.id === id);

  /* Scroll to top when page changes */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  /* Dynamic title update */
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Torentify Blog`;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="text-center py-20 text-gray-700 dark:text-gray-300">
        Blog not found
      </div>
    );
  }

  const pageTitle = `${post.title} | Torentify Blog`;

  const pageDescription = `${post.excerpt} Read the full article on Torentify to learn career strategies, hiring insights, and job growth tips.`;

  const canonicalUrl = `https://torentify.com/blog/${post.id}`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 dark:bg-gray-950">

      {/* SEO META */}
      <Helmet>

        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <meta
          name="keywords"
          content={`${post.title}, Torentify blog, career advice, job tips, hiring insights`}
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />

      </Helmet>

      {/* BLOG SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            author: {
              "@type": "Organization",
              name: "Torentify"
            },
            publisher: {
              "@type": "Organization",
              name: "Torentify",
              logo: {
                "@type": "ImageObject",
                url: "https://torentify.com/logo.png"
              }
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonicalUrl
            }
          })
        }}
      />

      {/* BLOG TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {post.title}
      </h1>

      {/* BLOG IMAGE */}
      <img
        src={post.image}
        alt={post.title}
        className="rounded-xl mb-8 w-full object-cover"
      />

      {/* BLOG CONTENT */}
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line text-base md:text-lg">
        {post.content}
      </div>

    </div>
  );
};

export default BlogDetails;