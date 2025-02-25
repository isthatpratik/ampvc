import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { SendHorizonal } from "lucide-react";
import MatchingList from "../forms/matching-list"; // Import the form component

export default function FinyxChat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showInitialSvg, setShowInitialSvg] = useState(true);
  const [showSecondSvg, setShowSecondSvg] = useState(false);
  const [showResultScreen, setShowResultScreen] = useState(false);
  const [showMatchingForm, setShowMatchingForm] = useState(false); // State for MatchingList form
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatContainerRef.current?.scrollTo(0, chatContainerRef.current.scrollHeight);
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    if (showInitialSvg) setShowInitialSvg(false);

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    if (messages.filter((msg) => msg.role === "user").length === 1) {
      setTimeout(() => {
        setShowSecondSvg(true);
        setTimeout(() => setShowResultScreen(true), 2000);
      }, 500);
    }

    try {
      const response = await fetch("/api/chatbot/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatHistory: [...messages, userMessage] }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.result }]);
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "An error occurred. Try again!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sticky top-0 flex h-screen w-full flex-col bg-[#FAFAFA] lg:w-full overflow-hidden items-center justify-center pt-14 pb-14 px-10">
      <motion.h1
        className="text-h4 tracking-tight"
        initial={{ y: "50px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 25,
          },
        }}
      >
        Find the right investors effortlessly with <br />
        <span className="bg-gradient-to-r from-[#4E7E71CF]/80 from-40% via-[#FB79C7] to-[#F7E307] to-80% bg-clip-text text-transparent">
          AI-powered matching.
        </span>
      </motion.h1>

      {showInitialSvg && (
        <motion.div className="flex items-center justify-center h-full" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}>
          <Image src="/images/finyx-chat/middle-circle.svg" alt="Initial SVG" width={200} height={200} />
        </motion.div>
      )}

      {!showInitialSvg && !showSecondSvg && !showResultScreen && (
        <motion.div className="w-full overflow-y-auto h-full pt-10 flex-col space-y-3" ref={chatContainerRef} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.6, type: "spring", stiffness: 100, damping: 25 } }}>
          {messages.map((msg, index) => (
            <motion.div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div className={`p-3 max-w-xs rounded-2xl text-white ${msg.role === "user" ? "bg-gradient-to-r from-[#007AFF] to-[#4E54C8] rounded-br-none shadow-lg hover:shadow-xl transition-shadow duration-300" : "bg-gradient-to-tr from-[#4E7E71CF]/80 via-[#FB79C7]/80 to-[#F7E307]/80 rounded-bl-none backdrop-blur-md bg-opacity-60 shadow-md hover:shadow-lg transition-all duration-300"}`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
          {loading && <motion.div className="text-gray-400 text-sm">Typing...</motion.div>}
        </motion.div>
      )}

      {showSecondSvg && !showResultScreen && (
        <motion.div className="flex items-center justify-center h-full" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1, duration: 1 } }}>
          <Image src="/images/finyx-chat/thinking.svg" alt="Second SVG" width={200} height={200} />
        </motion.div>
      )}

      {showResultScreen && (
        <motion.div className="w-full h-full flex flex-col space-y-4 items-center justify-center text-center" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }}>
          <h2 className="text-xl font-bold">Top 3 Matches</h2>
          <div className="flex flex-col space-y-2 w-full">
            <div className="p-3 bg-gray-100 rounded-md">Investor 1</div>
            <div className="p-3 bg-gray-100 rounded-md">Investor 2</div>
            <div className="p-3 bg-gray-100 rounded-md">Investor 3</div>
            <div className="p-3 bg-gray-200 rounded-md blur-md">Investor 4</div>
            <div className="p-3 bg-gray-200 rounded-md blur-md">Investor 5</div>
          </div>
          <Button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setShowMatchingForm(true)}>
            Click Here to Download
          </Button>
        </motion.div>
      )}

      {!showResultScreen && (
        <motion.div className="border border-[#DCE0DF] w-full h-auto px-4 py-4 flex items-center rounded-[10px] bg-white mt-4" initial={{ y: "50px", opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1.2, type: "spring", stiffness: 100, damping: 25 } }}>
          <Input className="w-full h-auto border-none bg-transparent shadow-none focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0" placeholder="Type your prompt here" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} />
          <Button className="ml-2 w-12 h-10 bg-[#181A1A] flex items-center justify-center rounded-sm" onClick={sendMessage} disabled={loading}>
            <SendHorizonal size={16} className="text-white" />
          </Button>
        </motion.div>
      )}

      {showMatchingForm && <MatchingList open={showMatchingForm} setOpen={setShowMatchingForm} />}
    </div>
  );
}
