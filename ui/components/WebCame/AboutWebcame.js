import React from "react";
import {Heading, Text} from "@/atoms/index";


const About = () => {
  return (
    <section className="bg-[#4fd785] bg-opacity-[0.05] py-4 pb-20 " id='About'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="lg:text-center">
          <Heading type ='h1' className="mb-10">
            About Us
          </Heading>
          <Text type ='bodyStyleMedium ' >
            At our website, we provide a simple and easy-to-use webcam testing tool to ensure that your webcam is working properly. Whether you're preparing for a video conference, online interview, or virtual event, we've got you covered. Our tool works with any device that has a webcam, and you can use it for free, without any registration or downloads.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default About;
