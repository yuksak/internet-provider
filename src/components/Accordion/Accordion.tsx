import React, { useState, FC } from 'react'

import { IoIosArrowUp } from 'react-icons/io'
import { IAccordionProps } from './Accordion.type'

export const Accordion: FC<IAccordionProps> = ({
  id,
  title,
  requirements,
  responsibilities,
  conditions,
  salary,
  addition,
}) => {
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e)
    setExpanded((current) => !current)
  }

  return (
    <div>
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-2 sm:p-5 font-medium text-xs sm:text-sm md:text-base text-left text-gray-500 border ${
            expanded ? ' text-gray-400 bg-gray-100' : ''
          } border-gray-200  hover:bg-gray-100`}
          onClick={toggleExpanded}
        >
          <span>{title}</span>
          <IoIosArrowUp className={`w-6 h-6 ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`transition-[height] duration-500 ease-in overflow-hidden ${
          expanded ? 'h-auto' : 'h-0'
        }`}
      >
        <div className="p-5 font-light border border-t-0 border-gray-200">
          <h2 className="mb-2 md:text-lg font-semibold text-gray-900 text-sm">{title}</h2>

          <h2 className="mb-2 sm:text-md font-semibold text-gray-900 mt-5 text-sm">
            Responsibilities:
          </h2>
          <ul className="space-y-1 text-gray-500 list-disc list-inside">
            {responsibilities.map((item, index) => (
              <li key={index} className="text-xs sm:text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mb-2 text-md font-semibold text-gray-900 mt-5 text-sm sm:text-base">
            Requirements:
          </h2>
          <ul className="space-y-1 text-gray-500 list-disc list-inside">
            {requirements.map((item, index) => (
              <li key={index} className="text-xs sm:text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mb-2 text-md font-semibold text-gray-900 mt-5 text-sm sm:text-base">
            Conditions:
          </h2>
          <ul className="space-y-1 text-gray-500 list-disc list-inside">
            {conditions.map((item, index) => (
              <li key={index} className="text-xs sm:text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mb-2 text-md font-semibold text-gray-900 mt-5 text-sm sm:text-base">
            Salary:
          </h2>
          <p className="space-y-1 text-gray-500 text-xs sm:text-sm md:text-base">{salary}</p>

          <p className="space-y-1 text-gray-500 mt-5 italic font-normal text-xs sm:text-sm md:text-base">
            {addition}
          </p>
        </div>
      </div>
    </div>
  )
}
