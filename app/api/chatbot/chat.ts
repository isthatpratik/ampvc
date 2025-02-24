import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { chatHistory } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are an AI VC matchmaking chatbot." },
        ...chatHistory,
      ],
      max_tokens: 500,
    });

    res.status(200).json({ result: response.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
}
