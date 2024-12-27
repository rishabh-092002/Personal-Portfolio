import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What Have I Learnt So Far.</p>
        <h2 className={styles.sectionHeadText}>Technology Stack</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon}/>
            <div className="items-center justify-center flex font-extrabold px-[15px] py-1 text-[#3498db]">{technology.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
