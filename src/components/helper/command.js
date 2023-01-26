import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import Anvar from '../../assets/img/Shabhatovich.png'
import Keni from '../../assets/img/Keni.png'
import Alymkulova from '../../assets/img/Alymkulova.png'

export const commands = [
  {
    position: 'Генеральный директор',
    name: 'Алымкулова Мира',
    img: Alymkulova,
    messengers: [
      {
        link: 'https://www.facebook.com',
        icon: <FaFacebookF className="text-[#B66A20] text-[15px]" />,
      },
      {
        link: 'https://twitter.com',
        icon: <BsTwitter className="text-[#B66A20] text-[15px]" />,
      },
      {
        link: 'https://www.instagram.com',
        icon: <AiFillInstagram className="text-[#B66A20] text-[15px]" />,
      },
    ],
  },
  {
    position: 'Учредитель',
    name: 'Анвар Шавкатович',
    img: Anvar,
    messengers: [
      {
        link: 'https://www.facebook.com',
        icon: <FaFacebookF className="text-[#B66A20] text-[15px]" />,
      },
      {
        link: 'https://twitter.com',
        icon: <BsTwitter className="text-[#B66A20] text-[15px]" />,
      },
      {
        link: 'https://www.instagram.com',
        icon: <AiFillInstagram className="text-[#B66A20] text-[15px]" />,
      },
    ],
  },
  {
    position: 'Менеджер по продажам',
    name: 'Серен Кени',
    img: Keni,
    messengers: [
      {
        link: 'https://www.facebook.com',
        icon: <FaFacebookF className="text-[#B66A20] text-[15px]" />,
      },
      {
        link: 'https://twitter.com',
        icon: <BsTwitter className="text-[#B66A20] text-[15px]" />,
      },
      {
        link: 'https://www.instagram.com',
        icon: <AiFillInstagram className="text-[#B66A20] text-[15px]" />,
      },
    ],
  },
]
