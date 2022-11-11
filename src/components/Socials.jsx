import { FaYoutube, FaFacebookF, FaInstagram, FaPinterestP, FaDiscord } from "react-icons/fa";

export const socialData = [
  { href: "/", icon: <FaYoutube /> },
  { href: "/", icon: <FaFacebookF /> },
  { href: "/", icon: <FaInstagram /> },
  { href: "/", icon: <FaPinterestP /> },
  { href: "/", icon: <FaDiscord /> },
];

const Socials = () => {
  return (
    <div className="flex gap-x-[10px]">
      {socialData.map((item, index) => {
        return (
          <a className="border border-white/20 rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all" href={item.href} key={index}>
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
