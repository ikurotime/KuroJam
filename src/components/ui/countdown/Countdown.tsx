import React, { useState, useEffect } from 'react'
import './styles.css'

const COUNTDOWN_TARGET = new Date('2023-08-10T23:59:59').getTime()

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
    <div className="countdown">
      <div className="content">
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
    </div>
  )
}

export default Countdown
