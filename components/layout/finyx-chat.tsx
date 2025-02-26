import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { SendHorizonal } from "lucide-react";

export default function FinyxChat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showInitialSVG, setShowInitialSVG] = useState(true);
  const [showMidSVG, setShowMidSVG] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [investorMatches, setInvestorMatches] = useState<string[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatContainerRef.current?.scrollTo(0, chatContainerRef.current.scrollHeight);
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);
    setShowInitialSVG(false);

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

      if (messages.length === 1) {
        setShowMidSVG(true);
        setTimeout(() => {
          fetchInvestorMatches();
          setShowMidSVG(false);
          setShowResults(true);
        }, 2000);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "An error occurred. Try again!" }]);
    } finally {
      setLoading(false);
    }
  };

  const fetchInvestorMatches = async () => {
    try {
      const response = await fetch("/api/chatbot/investors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatHistory: messages }),
      });

      const data = await response.json();
      if (response.ok) {
        setInvestorMatches(data.investors || []);
      } else {
        throw new Error(data.error || "Failed to fetch investors");
      }
    } catch (error) {
      console.error("Investor fetch error:", error);
    }
  };

  return (
    <div className="sticky top-0 flex h-screen w-full flex-col bg-[#FAFAFA] lg:w-full overflow-hidden items-center justify-between pt-14 pb-14 px-10">
      <motion.h1
        className="text-h4 tracking-tight"
        initial={{ y: "50px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.8, type: "spring", stiffness: 100, damping: 25 },
        }}
      >
        Find the right investors effortlessly with <br />
        <span className="bg-gradient-to-r from-[#4E7E71CF]/80 from-40% via-[#FB79C7] to-[#F7E307] to-80% bg-clip-text text-transparent">
          AI-powered matching.
        </span>
      </motion.h1>

      {/* Show Initial SVG before chat starts */}
      {showInitialSVG && (
        <div className="flex justify-center items-center h-full">
          <Image src="/images/finyx-chat/middle-circle.svg" alt="Start Chat" width={200} height={200} />
        </div>
      )}

      {/* Show mid-way SVG after second user message */}
      {showMidSVG && (
        <div className="flex justify-center items-center h-full">
          <Image src="/images/finyx-chat/thinking.svg" alt="Finding Match" width={200} height={200} />
        </div>
      )}

      {/* Show Chat Window or Results */}
      {!showInitialSVG && !showMidSVG && !showResults && (
        <motion.div
          className="w-full overflow-y-auto flex flex-col space-y-3"
          ref={chatContainerRef}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { delay: 1, type: "spring", stiffness: 100, damping: 10 },
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
                  msg.role === "user" ? "bg-blue-500 rounded-br-none" : "bg-gray-700 rounded-bl-none"
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
          {loading && <motion.div className="text-gray-400 text-sm">Typing...</motion.div>}
        </motion.div>
      )}

      {/* Show Investor Matches as Results */}
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
          <Button className="mt-3 w-full bg-[#181A1A] text-white py-2 rounded-md">
            Download Full List
          </Button>
        </motion.div>
      )}

      {/* Chat Input */}
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
          className="mr-2 object-contain w-12 h-auto"
        />
        <div className="w-[1px] h-full my-2 bg-[#DCDCDC]" />
          <Input
            className="w-full h-auto border-none bg-transparent shadow-none focus-visible::outline-none focus-visible:ring-0"
            placeholder="Type your prompt here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button onClick={sendMessage} disabled={loading}>
            <SendHorizonal size={16} className="text-white" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
