import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { MdError } from 'react-icons/md'
import { FcCheckmark } from 'react-icons/fc'
import { MdErrorOutline } from 'react-icons/md'

//local
import ContactIcons from '../assets/img/ContactLogo.svg'
import Location from '../assets/img/location.svg'
import SmsEmail from '../assets/img/sms-edit.svg'
import Call from '../assets/img/call.svg'
import Clock from '../assets/img/clock.svg'

const Contact = () => {
  const [load, setLoad] = useState(false)
  const [request, setRequest] = useState(false)
  const [requestErr, setRequestErr] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (contact) => {
    setLoad(true)
    axios
      .post('https://lionfish-app-uawum.ondigitalocean.app/', {
        ...contact,
      })
      .then(({ data }) => {
        console.log(data)
        setLoad(false)
        setRequest(true)
        setRequestErr(false)
      })
      .catch((err) => {
        console.log(err)
        setLoad(false)
        setRequest(false)
        setRequestErr(true)
      })
  }
  const LoadChange = () => {
    return (
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-[100] shadow-gray-100 backdrop-blur-[1px]">
        <svg
          aria-hidden="true"
          className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    )
  }
  const SuccessCom = () => {
    return (
      <div className="absolute top-0 bottom-0 left-0 right-0 p-2 bg-white">
        <h1 className="text-[#252525] font-[Jost] font-[300] text-[60px] max-md:text-[40px] leading-[100%] text-left max-md:text-center">
          Спасибо за обратную связь!
        </h1>
        <p className="tetx-[#252525] font-[Jost] font-[300] text-[22px] max-md:text-[19px] py-5 flex text-left max-md:text-center items-center">
          Ваша заявка успешно отправлена
          <FcCheckmark className="text-[rgba(51,164,76,1)] mx-2" />
        </p>
      </div>
    )
  }
  const ErrCom = () => {
    return (
      <div className="absolute top-0 bottom-0 left-0 right-0 p-2 bg-white">
        <h1 className="text-[rgb(37,37,37)] font-[Jost] font-[300] text-[60px] max-md:text-[40px] leading-[100%] text-left max-md:text-center">
          Извините!
        </h1>
        <p className="tetx-[#252525] font-[Jost] font-[300] text-[22px] max-md:text-[19px] py-5 flex text-left max-md:text-center items-center">
          Произошла ошибка
          <MdErrorOutline className="text-red-500 mx-2" />
        </p>
      </div>
    )
  }
  return (
    <section id="contact" className="relative">
      <div className="py-5 mb-16 mx-auto pl-[100px] max-lg:pl-[70px] max-md:pl-0 2xl:w-[1140px]">
        <div className="flex justify-center items-center">
          <img src={ContactIcons} alt="ContactIcon" width={40} height={40} />{' '}
          <h2 className="text-[#B66A20] pl-3 font-[300] uppercase font-[Jost] text-[22px]">
            контакты
          </h2>
        </div>
        <div className="flex justify-center pt-7 max-sm:px-4 flex-col">
          <h1 className="text-[60px] max-md:text-[40px] max-sm:text-[30px] font-[Jost] font-[300] tracking-[0.5px] leading-[90%] text-center normal-case text-[#C9AE5D]">
            Оставьте
            <span className="pl-1 text-[60px] max-md:text-[40px] max-sm:text-[30px] font-[Jost] font-[300] tracking-[0.5px] leading-[90%] text-center text-[#252525]">
              заявку
            </span>
          </h1>
          <p className="font-[Jost] text-center font-[300 text-[24px] max-sm:text-[22px] leading-[30px] mt-4">
            Напишите ваши контактные данные для <br className="max-sm:hidden" />{' '}
            индивидуальной консультации
          </p>
        </div>
        <div className="flex justify-between py-10 max-sm:py-5 max-sm:flex-col">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[450px] max-lg:w-[50%] max-sm:w-[100%] max-sm:pb-20 mx-auto relative"
          >
            {load && <LoadChange />}
            {request && <SuccessCom />}
            {requestErr && <ErrCom />}
            <div className="px-5">
              <div className="flex flex-col h-[90px] w-[90%] mx-auto my-6">
                <label
                  htmlFor="nameContact"
                  className="font-[Jost] text-[#252525] text-[16px] uppercase font-[700]"
                >
                  Имя
                </label>
                <div
                  className={`${
                    errors.name
                      ? 'border-[rgba(214,71,81,1)]'
                      : 'border-[rgba(51,51,51,0.5)]'
                  } border-b-[1px] border-solid py-2 flex justify-between items-center`}
                >
                  <input
                    id="nameContact"
                    {...register('name', {
                      required: 'Заполните поле ввода',
                    })}
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full outline-none border-none font-[Jost] text-[#252525] text-[16px]"
                  />
                  {errors.name && (
                    <MdError className="text-[24px] text-[#B3261E]" />
                  )}
                </div>
                {errors.name && (
                  <span className="text-[rgba(214,71,81,1)] text-[12px]">
                    {errors.name?.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col h-[90px] w-[90%] mx-auto my-6">
                <label
                  htmlFor="phoneContact"
                  className="font-[Jost] text-[#252525] text-[16px] uppercase font-[700]"
                >
                  Телефон
                </label>
                <div
                  className={`${
                    errors.number
                      ? 'border-[rgba(214,71,81,1)]'
                      : 'border-[rgba(51,51,51,0.5)]'
                  } border-b-[1px] border-solid py-2 flex justify-between items-center`}
                >
                  <input
                    {...register('number', {
                      required: 'Заполните поле ввода',
                    })}
                    id="phoneContact"
                    type="tel"
                    placeholder="+996(---)"
                    className="w-full outline-none border-none font-[Jost] text-[#252525] text-[16px]"
                  />
                  {errors.number && (
                    <MdError className="text-[24px] text-[#B3261E]" />
                  )}
                </div>
                {errors.number && (
                  <span className="text-[rgba(214,71,81,1)] text-[12px]">
                    {errors.number?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-center pt-6 max-sm:pt-2">
              <button className="py-2 active:opacity-[0.6] transition-[0.4s] active:transition-[0.4s] px-16 max-sm:px-10 font-[Jost] font-[500] text-[26px] border-[3px] solid border-[#B66A20]">
                Отправить
              </button>
            </div>
          </form>
          <div className="bg-[#343232] w-[500px] max-lg:w-[50%] max-sm:w-[100%] px-5 py-8">
            <div className="flex items-center py-3">
              <img src={Location} alt="Location" width={40} className="mx-3" />
              <p className="font-[Jost] text-[#FDFDFD] tetx-[16px] font-300">
                г. Бишкек, ул. Токтогула 125/1 <br /> Бизнес-центр «Авангард» 1
                и 2 этажи
              </p>
            </div>
            <div className="flex items-center my-3">
              <img src={SmsEmail} alt="Email" width={40} className="mx-3" />
              <a
                href="mailto:baytiklux@gmail.com"
                className="font-[Jost] text-[#FDFDFD] tetx-[16px] font-300"
              >
                baytiklux@gmail.com
              </a>
            </div>
            <div className="flex items-center py-3">
              <img src={Call} alt="Phone" width={40} className="mx-3" />
              <a
                href="tel:0312123345"
                className="font-[Jost] text-[#FDFDFD] tetx-[16px] font-300"
              >
                0312-(123)-(345)
              </a>
            </div>
            <div className="flex items-center py-3">
              <img src={Clock} alt="Clock" width={40} className="mx-3" />
              <p className="font-[Jost] text-[#FDFDFD] tetx-[16px] font-300">
                09:00 - 19:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
