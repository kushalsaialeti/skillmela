"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import logo from "../../assets/skillmela-logo.png"
export function Hero() {
  const targetDate = new Date("2026-02-18T09:00:00+05:30").getTime()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      const diff = Math.max(targetDate - now, 0)
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)
      setTimeLeft({ days, hours, minutes, seconds })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetDate])
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28">
      {/* Background Elements */}
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        style={{ animation: "float 3s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        style={{
          animation: "float 3s ease-in-out infinite",
          animationDelay: "1s"
        }}
      />

      <motion.div
        className="container mx-auto px-4 sm:px-6 z-10 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative">
        <motion.p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/70"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          PAIE Cell Presents
        </motion.p>

        {/* Main Logo/Title */}
        <motion.div
          className="relative mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute inset-0 mx-auto h-40 w-3/4 max-w-3xl rounded-full bg-gradient-to-r from-cyan-400/30 via-sky-400/30 to-blue-400/20 blur-3xl" />
          <img
            src={logo}
            alt="Skill Mela"
            width={520}
            height={170}
            className="relative h-auto w-full max-w-[280px] sm:max-w-md md:max-w-2xl"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {/* <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-relaxed">
            Become The Engineer Everyone Wants To Hire
          </h2> */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Skill Mela brings you the skills that truly matter — from problem
            solving and development foundations to AI-powered productivity and
            creative income opportunities.
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300/70 mb-2">
            Countdown To Kickoff
          </p>
          <div className="mx-auto grid max-w-xs sm:max-w-md grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds }
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 py-2"
                style={{ backdropFilter: "blur(10px)" }}
              >
                <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="mt-1 text-[9px] uppercase tracking-[0.15em] text-cyan-200/80">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <button
            className="group w-full sm:w-auto px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-sm rounded transition transform hover:scale-105 flex items-center justify-center gap-2"
            style={{
              borderColor: "hsl(180, 100%, 50%)",
              boxShadow:
                "0 0 20px hsla(180, 100%, 50%, 0.3), inset 0 0 10px hsla(180, 100%, 50%, 0.1)"
            }}
          >
            <span>CLAIM YOUR SEAT</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </button>
          <button className="w-full sm:w-auto px-8 py-3 border-2 border-cyan-500/50 hover:border-cyan-400 text-cyan-400 font-bold text-sm rounded transition hover:bg-cyan-500/10">
            VIEW WORKSHOP TRACKS
          </button>
        </motion.div>
        <motion.p
          className="text-xs text-cyan-200/70 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Limited seats • Early-bird perks for the first 200 registrations
        </motion.p>

        {/* Event Details
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <div
            className="rounded-lg p-4 border border-cyan-500/20 hover:border-cyan-400 transition"
            style={{
              background: "rgba(200, 232, 255, 0.05)",
              backdropFilter: "blur(10px)"
            }}
          >
            <p className="text-xs text-cyan-400 font-mono mb-1">DATE & TIME</p>
            <p className="text-white font-bold">Feb 18, 2026</p>
          </div>
          <div
            className="rounded-lg p-4 border border-cyan-500/20 hover:border-cyan-400 transition"
            style={{
              background: "rgba(200, 232, 255, 0.05)",
              backdropFilter: "blur(10px)"
            }}
          >
            <p className="text-xs text-cyan-400 font-mono mb-1">LOCATION</p>
            <p className="text-white font-bold">CSE Seminar Hall, I Block</p>
          </div>
        </motion.div> */}
        </div>
      </motion.div>
    </section>
  )
}
