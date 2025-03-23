import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center border-2 border-black text-black rounded-full hover:text-gray-600 hover:border-gray-600 transition"
  >
    <FontAwesomeIcon icon={icon} className="text-xl" />
  </a>
);

const Introduction = () => (
  <div className="space-y-4 md:space-y-6">
    <p className="text-lg font-medium"> Hello, it's me </p>
    <h1 className="text-4xl md:text-5xl font-extrabold"> Artist John </h1>
    <h2 className="text-xl font-semibold"> I'm an artist</h2>
    <p className="text-gray-700">
      Please hold your breath as we dive into a world full of creativity with designer John.
    </p>
  </div>
);

const SocialIcons = () => (
  <div className="space-y-4 mt-6">
    <div className="flex space-x-4">
      <SocialIcon href="https://facebook.com" icon={faFacebookF} />
      <SocialIcon href="https://instagram.com" icon={faInstagram} />
      <SocialIcon href="mailto:artistjohn@example.com" icon={faEnvelope} />
    </div>
    {/* My Portfolio Button */}
    <a
      href="#about"
      className="inline-block bg-green-600 text-white font-medium text-lg px-6 py-3 rounded-full hover:bg-green-700 transition mt-4"
    >
      My Portfolio
    </a>
  </div>
);

const ProfileImage = () => (
  <div className="flex justify-center">
    <img
      className="w-74 md:w-94 object-cover"
      src="https://www.pngall.com/wp-content/uploads/9/Male-Entrepreneur-PNG-Free-Image.png"
      alt="artist john"
    />
  </div>
);

const Home = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 my-12 items-center gap-8 px-8 mx-24 md:mx-20 py-12"
    >
      <div>
        <Introduction />
        <SocialIcons />
      </div>
      <ProfileImage />
    </section>
  );
};

export default Home;