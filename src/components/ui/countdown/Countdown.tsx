import React, { useState, useEffect } from 'react'
import './styles.css'

const dateLocale = new Date(1692914399000)
const COUNTDOWN_TARGET = new Date(dateLocale).getTime()
//const ZERO_VALUE = 0
const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date().getTime()
  const días = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24))
  const horas = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24)
  const minutos = Math.floor((totalTimeLeft / (1000 * 60)) % 60)
  const segundos = Math.floor((totalTimeLeft / 1000) % 60)
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
      <div className="flex gap-2 text-lg">
        <div className="countdown-box">
          <span>{timeLeft.días}</span>
          <span>d</span>
        </div>
        <span>:</span>
        <div className="countdown-box">
          <span>{timeLeft.horas}</span>
          <span>h</span>
        </div>
        <span>:</span>
        <div className="countdown-box">
          <span>{timeLeft.minutos}</span>
          <span>m</span>
        </div>
        <span>:</span>
        <div className="countdown-box">
          <span>{timeLeft.segundos}</span>
          <span>s</span>
        </div>
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
