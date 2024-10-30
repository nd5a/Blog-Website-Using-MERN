import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import dv from "../assets/developer.jpg";
import { Button } from "flowbite-react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const fullText = "I am a Full Stack Web Developer";
  const typingSpeed = 150; // Speed in milliseconds for each letter
  const resetDelay = 2500; // Delay before resetting

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
        setTimeout(type, typingSpeed); // Continue typing with smoother speed
      } else {
        setTimeout(() => {
          index = 0;
          setText(""); // Clear text to restart typing
          type(); // Start typing again
        }, resetDelay);
      }
    };

    type(); // Initial typing start
  }, []); //

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-32 px-3 max-w-6xl mx-auto ">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          {text.split("Full Stack Web Developer").map((part, idx) =>
            idx === 1 ? (
              <span
                key={idx}
                className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"
              >
                Full Stack Web Developer
              </span>
            ) : (
              part
            )
          )}
          <span className="blinking-cursor">|</span>
        </h1>

        <br />
        <h1 className="text-3xl font-bold lg:text-6xl">
          Welcome to{" "}
          <span className="font-bold px-3 py-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg text-white ">
            DN's
          </span>{" "}
          <span className="bg-gradient-to-r from-orange-500  to-pink-500 inline-block text-transparent bg-clip-text">
            Blog
          </span>
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          <Button gradientDuoTone={"pinkToOrange"} pill>
            View all posts
          </Button>
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
      <div className="scroll-to-top">
        {isVisible && (
          <button onClick={scrollToTop} className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-bold py-2 px-4 rounded scroll-button">
            <i class="fa-solid fa-up-long"></i>
          </button>
        )}
      </div>
    </div>
  );
}
