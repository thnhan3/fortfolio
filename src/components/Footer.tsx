import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub, FaPhone } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="px-8 text-white mb-5 flex items-center justify-between">
      <div className="flex items-center">
        <MdOutlineEmail className="mr-2" /> Email Me
      </div>

      <div className="flex">
        <FaPhone className="mr-2" />
        <FaGithub className="mr-2" />
      </div>
    </footer>
  );
}
