import CallToAction from "../components/CallToAction";

export default function Project() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-6 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl sm:text-4xl font-bold text-teal-600 dark:text-teal-400 transition-colors duration-300 hover:text-teal-500 dark:hover:text-teal-300">
        Projects
      </h1>

      <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400 text-center px-4 sm:px-0 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300">
        Build fun and engaging projects while learning Python!
      </p>

      <div className="w-full flex justify-center mt-4">
        <CallToAction />
      </div>
    </div>
  );
}
