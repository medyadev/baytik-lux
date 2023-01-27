import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

export const messengers = [
  {
    link: 'https://www.facebook.com',
    elem: <FaFacebookF className="text-[#B66A20] text-[15px]" />,
    iconWhite: <FaFacebookF className="text-white text-[16px]" />,
  },
  {
    link: 'https://twitter.com',
    elem: <BsTwitter className="text-[#B66A20] text-[15px]" />,
    iconWhite: <BsTwitter className="text-white text-[16px]" />,
  },
  {
    link: 'https://www.instagram.com',
    elem: <AiFillInstagram className="text-[#B66A20] text-[15px]" />,
    iconWhite: <AiFillInstagram className="text-white text-[16px]" />,
  },
]
