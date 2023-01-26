import React, { FC } from 'react'
import { IModalProps } from './Modal.types'
import { IoClose } from 'react-icons/io5'

export const Modal: FC<IModalProps> = ({ onClick }) => {
  return (
    <div className="fixed z-50 w-full p-4 overflow-x-hidden md:inset-0 h-modal md:h-full bg-black/50">
      <div className="relative flex justify-center items-center mt-0 md:mt-10">
        <div className="relative w-full h-full max-w-sm md:h-auto bg-white shadow">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-hide="authentication-modal"
            onClick={() => onClick(false)}
          >
            <IoClose className="h-5 w-5" />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900">Ulanish uchun ariza</h3>
            <form className="space-y-6" action="#">
              <div>
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">
                  Ismingiz
                </label>
                <input
                  type="text"
                  name="text"
                  id="text"
                  className="bg-gray-50 border rounded-none border-gray-300 text-gray-900 outline-none text-sm block w-full p-2.5"
                  placeholder="Name Surname"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Elektron manzilingiz
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border rounded-none border-gray-300 text-gray-900 outline-none text-sm block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                  Telefon raqamingiz
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="1234567890"
                  className="bg-gray-50 border rounded-none border-gray-300 text-gray-900 outline-none text-sm block w-full p-2.5"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                  Xabaringiz
                </label>
                <input
                  type="text"
                  name="message"
                  id="message"
                  placeholder="I would like to..."
                  className="bg-gray-50 border rounded-none border-gray-300 text-gray-900 outline-none text-sm block w-full p-2.5"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm px-5 py-2.5 text-center"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
