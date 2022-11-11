import Newsletter from "./Newsletter";
import Copyright from "./Copyright";
import Socials from "./Socials";
import { FaYoutube, FaFacebookF, FaInstagram, FaPinterestP, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../variants";

export const footerData = {
  contact: {
    title: "contact location",
    address: "3784 patterson road, #8 new york, CA 69000",
    phone: "(201)256-3689",
  },
  hours: {
    title: "working hours",
    program: [
      {
        days: "monday - friday",
        hours: "09:00 AM - 10:00 PM",
      },
      {
        days: "saturday - sunday",
        hours: "09:00 AM - 11:00 PM",
      },
    ],
  },
  social: {
    title: "social network",
    icons: [
      { href: "/", icon: <FaYoutube /> },
      { href: "/", icon: <FaFacebookF /> },
      { href: "/", icon: <FaInstagram /> },
      { href: "/", icon: <FaPinterestP /> },
      { href: "/", icon: <FaDiscord /> },
    ],
  },
};
const Footer = () => {
  const { contact, hours, social } = footerData;

  return (
    <footer className="relative top-96 z-20 bg-dark lg:bg-transparent lg:min-h-[620px] lg:bg-footer lg:bg-no-repeat lg:bg-center pt-20 lg:pt-32">
      <div className="container mx-auto h-full">
        {/* newsletter & info */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView={"show"} className="h-full flex flex-col gap-y-4">
          {/* newsletter */}
          <motion.div variants={fadeIn("up", "tween", 0.4, 1.6)}>
            <Newsletter />
          </motion.div>
          {/* info */}
          <motion.div variants={fadeIn("up", "tween", 0.6, 1.6)} className="flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12 lg:gap-y-0 lg:mb-12">
            {/* contact */}
            <div className="flex-1 capitalize lg:max-w-[170px]">
              <div className="text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">{contact.title}</div>
              <div>{contact.address}</div>
              <div>{contact.phone}</div>
            </div>
            {/* program */}
            <div className="flex-1 capitalize">
              <div className="text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">{hours.title}</div>
              <div className="flex gap-x-[46px]">
                {hours.program.map((item, index) => {
                  return (
                    <div key={index}>
                      <div>
                        <div>{item.days}</div>
                        <div className="text-[20px] text-accent">{item.hours}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* social */}
            <div className="flex-1 lg:max-w-[280px] mb-12 capitalize">
              <div className="text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">{social.title}</div>
              <Socials />
            </div>
          </motion.div>
          {/* copyright */}
          <Copyright />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
