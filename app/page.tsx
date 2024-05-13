import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import Volunteer from "../components/Volunteer";
import UXDesign from "../components/UXDesign";
import Contact from "../components/Contact";
import SkillSet from "@/components/SkillSet";
export default function Page({ children }: any) {
  return (
    <div>
      <Navbar />
      <Header></Header>
      <About></About>
      <Work></Work>
      <Volunteer></Volunteer>
      <UXDesign></UXDesign>
      <SkillSet></SkillSet>
      <Contact></Contact>
      {children}
      <Footer />
    </div>
  );
}
