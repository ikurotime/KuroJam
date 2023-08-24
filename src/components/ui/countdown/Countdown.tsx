import React, { useState, useEffect } from 'react'
import './styles.css'

const dateLocale = new Date(1692914399000)
const COUNTDOWN_TARGET = new Date(dateLocale).getTime()
//const ZERO_VALUE = 0
const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date().getTime()
  const días = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, '0')
  const horas = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24)
    .toString()
    .padStart(2, '0')
  const minutos = Math.floor((totalTimeLeft / (1000 * 60)) % 60)
    .toString()
    .padStart(2, '0')
  const segundos = Math.floor((totalTimeLeft / 1000) % 60)
    .toString()
    .padStart(2, '0')
  if (totalTimeLeft <= 0) {
    return { días: 0, horas: 0, minutos: 0, segundos: 0 }
  }
  return { días, horas, minutos, segundos }
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <div className="flex items-center gap-2 text-lg">
        {COUNTDOWN_TARGET - new Date().getTime() <= 0 ? (
          <p className="text-2xl">¡Se acabó el tiempo!</p>
        ) : (
          <>
            <div className="countdown-box aspect-square flex justify-center items-center">
              <span>{timeLeft.días}</span>
              <span>d</span>
            </div>
            <span>:</span>
            <div className="countdown-box aspect-square flex justify-center items-center">
              <span>{timeLeft.horas}</span>
              <span>h</span>
            </div>
            <span>:</span>
            <div className="countdown-box aspect-square flex justify-center items-center">
              <span>{timeLeft.minutos}</span>
              <span>m</span>
            </div>
            <span>:</span>
            <div className="countdown-box aspect-square flex justify-center items-center ">
              <span>{timeLeft.segundos}</span>
              <span>s</span>
            </div>
          </>
        )}
      </div>

      {/* <div className="countdown">
      <div className="content grid grid-cols-2 grid-rows-2 place-items-center sm:flex">
        {Object.entries(timeLeft).map((el) => {
          const label = el[0]
          const value = el[1]
          return (
            <div className="box" key={label}>
              <div className="value">
                <span>{value}</span>
              </div>
              <span className="label"> {label} </span>
            </div>
          )
        })}
      </div>
      </div> */}
    </>
  )
}

export default Countdown
