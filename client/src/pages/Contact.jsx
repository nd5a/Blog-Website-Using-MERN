import React from "react";

export default function Contact() {
  return (
    <main className="bg-white dark:bg-black py-5 ">
      <section className="bg-teal-900 p-3 text-white rounded-lg mx-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-semibold text-white pt-3 dark:text-gray-100">
              Contact Me
            </h3>
            <div className="border-t-2 border-gray-300 w-24 mx-auto mt-2"></div>
          </div>
          <div className="flex flex-col md:flex-row bg-gray-800 p-4 rounded-lg shadow-lg gap-8">
            {/* Left Section: Contact Form */}
            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="180e1ac6-537b-4570-a2bd-50bd5b4db710"
              />
              <div className="flex-1 space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="bg-transparent border border-white p-3 text-white rounded-lg w-full md:w-1/2"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-transparent border border-white p-3 text-white rounded-lg w-full md:w-1/2"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="bg-transparent border border-white p-3 text-white rounded-lg w-full"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="bg-transparent border border-white p-3 text-white rounded-lg w-full h-32"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 self-center"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Right Section: Contact Info */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 border border-white rounded-full">
                    <i className="fab fa-whatsapp text-white"></i>
                  </div>
                  <div>
                    <p className="text-white">WhatsApp:</p>
                    <a
                      href="https://wa.me/+919409625408"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:underline"
                    >
                      +91 94096 25408
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 border border-white rounded-full">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <p className="text-white">Email:</p>
                  <span><a  href="mailto:dhnakrani80@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer" className="text-teal-400 hover:underline">dhnakrani80@gmail.com</a></span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 border border-white rounded-full">
                  <i className="fas fa-location-dot text-white"></i>
                </div>
                <div>
                  <p className="text-white">Location:</p>
                  <span className="text-teal-400">
                    Varachha Road, Surat-395010
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl text-white mt-4">Follow</h3>
                <ul className="flex gap-4 mt-4">
                  <li className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition duration-300">
                    <a href="#" className="text-white">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition duration-300">
                    <a href="#" className="text-white">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition duration-300">
                    <a href="#" className="text-white">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition duration-300">
                    <a href="#" className="text-white">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
