"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowLeft, SendHorizonal } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import MatchingList from "@/components/forms/matching-list"

interface FinyxChatProps {
  onBack: () => void;
}

export default function FinyxChat({ onBack }: FinyxChatProps) {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [showInitialSVG, setShowInitialSVG] = useState(true)
  const [showMidSVG, setShowMidSVG] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [investorMatches, setInvestorMatches] = useState<string[]>([])
  const [showForm, setShowForm] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const placeholderTexts = [
    "We are fintech startup in New York, looking for seed funding..",
    "AI-Powered healthcare platform aiming for $2M...",
    "AI startup in India, looking for Series A funding...",
  ]
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholderTexts[0])
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPlaceholderVisible(false)
      setTimeout(() => {
        setPlaceholderIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % placeholderTexts.length
          setCurrentPlaceholder(placeholderTexts[newIndex])
          return newIndex
        })
        setIsPlaceholderVisible(true)
      }, 500) // Wait for fade-out before changing text
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    chatContainerRef.current?.scrollTo(0, chatContainerRef.current.scrollHeight)
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setMessages([...messages, userMessage])
    setInput("")
    setLoading(true)
    setShowInitialSVG(false)

    try {
      const response = await fetch("/api/chatbot/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatHistory: [...messages, userMessage] }),
      })

      const data = await response.json()
      if (response.ok) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.result }])
      } else {
        throw new Error(data.error || "Something went wrong")
      }

      if (messages.length === 1) {
        setShowMidSVG(true)
        setTimeout(() => {
          fetchInvestorMatches()
          setShowMidSVG(false)
          setShowResults(true)
        }, 2000)
      }
    } catch (error) {
      console.error("Chat error:", error)
      setMessages((prev) => [...prev, { role: "assistant", content: "An error occurred. Try again!" }])
    } finally {
      setLoading(false)
    }
  }

  const fetchInvestorMatches = async () => {
    try {
      const response = await fetch("/api/chatbot/investors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatHistory: messages }),
      })

      const data = await response.json()
      if (response.ok) {
        setInvestorMatches(data.investors || [])
      } else {
        throw new Error(data.error || "Failed to fetch investors")
      }
    } catch (error) {
      console.error("Investor fetch error:", error)
    }
  }

  const renderMessageContent = (content: string) => {
    const parts = content.split("[Download Full List]")
    return (
      <>
        {parts[0]}
        {parts.length > 1 && (
          <Button className="mt-3 w-full bg-[#181A1A] text-white py-2 rounded-md" onClick={() => setShowForm(true)}>
            Download Full List
          </Button>
        )}
      </>
    )
  }

  return (
    <div className="sticky top-0 flex lg:h-screen min-h-[70vh] w-full flex-col 2xl:bg-[#FAFAFA] lg:w-full overflow-hidden items-center justify-between pt-8 2xl:pt-14 2xl:pb-14 pb-8 px-5 lg:px-10">
      <motion.h1
        className="text-h5 lg:text-h4 tracking-tight"
        initial={{ y: "50px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.8, type: "spring", stiffness: 100, damping: 25 },
        }}
      >
        <Button
            onClick={onBack}
            className="shadow-none 2xl:hidden mb-6 hover:bg-black/5 w-fit transition-all duration-300 rounded-full bg-transparent border border-black/20 px-6 py-1 flex items-center text-body-2"
          >
            <ArrowLeft className="" /> Back
          </Button>

        Find the right investors effortlessly with{" "}
        <span className="bg-gradient-to-r from-[#4E7E71CF]/80 from-40% via-[#FB79C7] to-[#F7E307] to-80% bg-clip-text text-transparent">
          AI-powered matching.
        </span>
      </motion.h1>

      {showInitialSVG && (
        <motion.div
          className="flex justify-center items-center h-full"
          initial={{ y: "50px", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 1, type: "spring", stiffness: 100, damping: 25 },
          }}
        >
          <Image
            src="/images/finyx-chat/thinking.svg"
            alt="Start Chat"
            width={200}
            height={200}
            className="w-25 h-auto"
          />
        </motion.div>
      )}

      {showMidSVG && (
        <div className="flex justify-center items-center h-full w-auto">
          <Image
            src="/images/finyx-chat/thinking.svg"
            alt="Finding Match"
            width={200}
            height={200}
            className="w-20 h-20"
          />
        </div>
      )}

      {!showInitialSVG && !showMidSVG && !showResults && (
        <motion.div
          className="w-full overflow-y-auto flex flex-col space-y-4"
          ref={chatContainerRef}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { delay: 1.2, type: "spring", stiffness: 100, damping: 10 },
          }}
        >
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`p-3 max-w-xs rounded-2xl text-white ${
                  msg.role === "user"
                    ? "bg-[#2B5C4F] rounded-br-none"
                    : "border border-[#FCEC3B] bg-[#000000] rounded-bl-none"
                }`}
              >
                {renderMessageContent(msg.content)}
              </div>
            </motion.div>
          ))}
          {loading && <motion.div className="text-gray-400 text-sm">Typing...</motion.div>}
        </motion.div>
      )}

      {showResults && (
        <motion.div
          className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg flex flex-col space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <h2 className="text-lg font-semibold">Top Investor Matches</h2>
          <div className="flex flex-col space-y-2 w-full">
            {investorMatches.slice(0, 3).map((investor, index) => (
              <div key={index} className="p-3 bg-gray-100 rounded-md">
                {investor}
              </div>
            ))}
            {investorMatches.slice(3).map((investor, index) => (
              <div key={index} className="p-3 bg-gray-200 rounded-md blur-md">
                {investor}
              </div>
            ))}
          </div>
          <Button className="mt-3 w-full bg-[#181A1A] text-white py-2 rounded-md" onClick={() => setShowForm(true)}>
            Download Full List
          </Button>
        </motion.div>
      )}

      {!showResults && (
        <motion.div
          className="border border-[#DCE0DF] w-full h-auto px-4 py-4 flex items-center rounded-[10px] bg-white mt-4"
          initial={{ y: "50px", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 1.2, type: "spring", stiffness: 100, damping: 25 },
          }}
        >
          <Image
            src={"/images/icons/amp-gray-icon.svg"}
            alt="Icon"
            width={48}
            height={48}
            className="mr-2 object-contain w-8 lg:w-12 h-auto"
          />
          <div className="w-[1px] h-full my-2 bg-[#DCDCDC]" />
          <div className="relative w-full mr-2 truncate">
            <Textarea
              className="resize-none placeholder:truncate lg:text-body-1 text-body-3 w-full min-h-8 h-8 overflow-hidden border-none bg-transparent shadow-none focus-visible:outline-none focus-visible:ring-0"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            {!input && (
              <div
                className="placeholder:truncate placeholder:text-body-3 absolute inset-0 pointer-events-none flex items-center px-3 text-gray-400 transition-opacity duration-500"
                style={{ opacity: isPlaceholderVisible ? 1 : 0 }}
              >
                {currentPlaceholder}
              </div>
            )}
          </div>
          <Button onClick={sendMessage} disabled={loading} className="aspect-square">
            <SendHorizonal className="text-white" />
          </Button>
        </motion.div>
      )}

      <MatchingList open={showForm} setOpen={setShowForm} />

      <style jsx>{`
        textarea::placeholder {
          color: transparent;
        }
      `}</style>
    </div>
  )
}