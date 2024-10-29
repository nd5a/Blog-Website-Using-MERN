import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800 px-4 py-8">
      <div className="max-w-3xl w-full p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-all hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-teal-500 text-center mb-4 transition-colors duration-300 hover:text-red-400">
          About DN's Blog
        </h1>
        
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="text-lg sm:text-base hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300">
            Welcome to DN's Blog, a blog about technology, programming, and more. This
            blog is created by<pre></pre> <span className="text-purple-600 font-semibold hover:text-red-600 hover:underline hover:cursor-pointer">Mr. DN (Dhruvil Nakrani)</span>, a Software Engineer with a passion for sharing knowledge
            and experiences. The blog covers a wide range of topics, including programming
            languages, web development, artificial intelligence, and data science.
          </p>
          
          <p className="text-lg sm:text-base hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300">
            This blog is designed to be a resource for anyone interested in technology and
            programming. Whether you're a beginner or an experienced developer, you'll find
            valuable information and insights on this blog.
          </p>
          
          <p className="text-lg sm:text-base hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300">
            If you have any questions or topics you'd like to discuss, feel free to Contact Me. I'd love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
}
