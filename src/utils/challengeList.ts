import { INewCycleFormData } from "../pages/Home/zodValidationSchema"

import ethereum from "../assets/icon/ethereum.svg"
import exercise from "../assets/icon/exercise.svg"
import coffee from "../assets/icon/coffee.svg"
import folder from "../assets/icon/folder.svg"
import phone from "../assets/icon/phone.svg"
import study from "../assets/icon/study.svg"
import books from "../assets/icon/books.svg"
import music from "../assets/icon/music.svg"
import water from "../assets/icon/water.svg"
import icon from "../assets/icon/Icon.svg"
import eye from "../assets/icon/eye.svg"

export interface IChallengeListProps {
  id: number,
  title: string,
  img: string,
  description: string,
  cycle: INewCycleFormData
}

export const ChallengeList: IChallengeListProps[] = [{
  id: 1,
  title: 'Ciclo extra',
  img: `${icon}`,
  description: 'Complete + um ciclo pomodoro de vinte e cinco minutos.',
  cycle: {
    task: "Primeiro ciclo",
    minutesAmount: 25,
  },
},
{
  id: 2,
  title: 'Exercite-se',
  img: `${exercise}`,
  description: 'Exercite-se por cinco minutos e estique suas pernas pra você ficar saudável.',
  cycle: {
    task: "Desafio Exercite-se",
    minutesAmount: 5,
  },
},
{
  id: 3,
  title: 'Mova os olhos',
  img: `${eye}`,
  description: 'Por cinco minutos tire seus olhos da telinha e faça algo pra saúde de seus olhos.',
  cycle: {
    task: "Desafio Mova os olhos",
    minutesAmount: 5,
  },
},
{
  id: 4,
  title: 'Rede social',
  img: `${phone}`,
  description: 'De uma olhadinha nas redes sociais por cinco minutos.',
  cycle: {
    task: "Desafio Rede social",
    minutesAmount: 5,
  },
},
{
  id: 5,
  title: 'Ciclo extra II',
  img: `${study}`,
  description: 'Complete + um ciclo pomodoro de vinte e cinco minutos.',
  cycle: {
    task: "Desafio Ciclo extra II",
    minutesAmount: 5,
  },
  },
  {
    id: 6,
    title: 'Hidrate-se',
    img: `${water}`,
    description: 'Aproveite os próximos cinco minutos para beber água.',
    cycle: {
      task: "Desafio Hidrate-se",
      minutesAmount: 5,
    },
  },
  {
    id: 7,
    title: 'Oraganizando as coisas',
    img: `${folder}`,
    description: 'Aproveite o tempo de cinco minutos para organizar sua mesa.',
    cycle: {
      task: "Desafio Oraganizando as coisas",
      minutesAmount: 5,
    },
  },
  {
    id: 8,
    title: 'Solta o som DJ',
    img: `${music}`,
    description: 'Nesses cinco minutos pare para ouvir uma boa música.',
    cycle: {
      task: "Desafio Solta o som DJ",
      minutesAmount: 5,
    },
  },
  {
    id: 9,
    title: 'Pausa Ethereum',
    img: `${ethereum}`,
    description: 'Que sorte! Vc encontrou um desafio Ethereum aproveite o tempo de 30 minutos para um longo descanso merecido.',
    cycle: {
      task: "Desafio Pausa Ethereum",
      minutesAmount: 30,
    },
  },
  {
    id: 10,
    title: 'Hora do café',
    img: `${coffee}`,
    description: '5 minutinhos para um café.',
    cycle: {
      task: "Desafio Hora do café",
      minutesAmount: 5,
    },
  },
  {
    id: 11,
    title: 'Ciclo extra III',
    img: `${books}`,
    description: 'Complete + um ciclo pomodoro de vinte e cinco minutos.',
    cycle: {
      task: "Desafio Ciclo extra II",
      minutesAmount: 5,
    },
  }
]