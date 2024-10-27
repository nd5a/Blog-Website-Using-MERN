import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to Learn More About Python?</h2>
        <p className="text-gray-500 my-2">
          Check out these resources to get started with Your Projects:
        </p>
        <Button
          gradientDuoTone={"purpleToPink"}
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.dataquest.io/blog/python-projects-for-beginners/"
            target="_blank"
            rel="noopener noreferrer"
          >
            60+ Python Projects
          </a>
        </Button>
      </div>

      <div className="p-7 flex-1">
        <img src="https://www.unite.ai/wp-content/uploads/2022/04/AI-Python-Libraries-1000x600.png" />
      </div>
    </div>
  );
}
