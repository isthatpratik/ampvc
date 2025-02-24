import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function FinyxChat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
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

      {/* Chat Window */}
      <motion.div
        className="w-full max-w-md h-[400px] overflow-y-auto bg-white shadow-lg p-4 rounded-lg flex flex-col space-y-3"
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

      {/* Chat Input */}
      <motion.div
        className="border border-[#DCE0DF] w-full h-auto px-4 py-4 flex items-center rounded-[10px] bg-white shadow-lg mt-4"
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
          className="w-full h-auto border-none bg-transparent shadow-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <Button
          className="ml-2 w-12 h-10 bg-[#181A1A] px-2 flex items-center justify-center rounded-sm"
          onClick={sendMessage}
          disabled={loading}
        >
          <FaPaperPlane size={16} className="text-white" />
        </Button>
      </motion.div>
    </div>
  );
}
