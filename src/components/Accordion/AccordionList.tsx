import React from 'react'
import { Accordion } from './Accordion'

export const AccordionList = () => {
  return (
    <div className="flex flex-col gap-2">
      {vacancies.map((vacancy) => (
        <Accordion {...vacancy} key={vacancy.id} />
      ))}
    </div>
  )
}

const vacancies = [
  {
    id: 1,
    title: '1. Оператор технической поддержки клиентов.',
    responsibilities: [
      'Cервисное обслуживание абонентов Компании по телефону по вопросам предоставляемых услуг (Интернет, Цифровое ТВ, сервисы предоставляемые компанией)',
      'Оказание информационной и технической поддержки абонентам по сложным вопросам',
      'Регистрация причин обращений в CRM',
      'Удалённая настройка клиентского оборудования',
    ],
    requirements: [
      'Опыт работы в операторе связи',
      'Высшее образование (техническое, предпочтительно в сфере связи/информационных технологий)',
      'Понимание базовых принципов работы сетей передачи данных (стек TCP/IP)',
      'Понимание принципов работы локальных сетей',
      'Уверенный пользователь ПК',
      'Личностные качества: эффективная коммуникация, клиентоориентированность, умение работать в команде, ориентация на результат, желание роста в сфере телеком.',
    ],
    conditions: [
      'График работы сменный',
      'Оформление по ТК РУз',
      'Дружный коллектив',
      'Презентабельный офис',
      'Офис в центре города',
    ],
    salary: 'Договорная',
    addition:
      'Если Вас заинтересовала данная вакансия, отправляйте резюме на e-mail: info@istv.uz  с пометкой на интересующую Вас вакансию. ',
  },
  {
    id: 2,
    title: '2. Оператор технической поддержки клиентов.',
    responsibilities: [
      'Cервисное обслуживание абонентов Компании по телефону по вопросам предоставляемых услуг (Интернет, Цифровое ТВ, сервисы предоставляемые компанией)',
      'Оказание информационной и технической поддержки абонентам по сложным вопросам',
      'Регистрация причин обращений в CRM',
      'Удалённая настройка клиентского оборудования',
    ],
    requirements: [
      'Опыт работы в операторе связи',
      'Высшее образование (техническое, предпочтительно в сфере связи/информационных технологий)',
      'Понимание базовых принципов работы сетей передачи данных (стек TCP/IP)',
      'Понимание принципов работы локальных сетей',
      'Уверенный пользователь ПК',
      'Личностные качества: эффективная коммуникация, клиентоориентированность, умение работать в команде, ориентация на результат, желание роста в сфере телеком.',
    ],
    conditions: [
      'График работы сменный',
      'Оформление по ТК РУз',
      'Дружный коллектив',
      'Презентабельный офис',
      'Офис в центре города',
    ],
    salary: 'Договорная',
    addition:
      'Если Вас заинтересовала данная вакансия, отправляйте резюме на e-mail: info@istv.uz  с пометкой на интересующую Вас вакансию. ',
  },
]
