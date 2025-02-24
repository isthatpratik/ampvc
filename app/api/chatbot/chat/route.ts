import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { chatHistory } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are an AI VC matchmaking chatbot." },
        ...chatHistory,
      ],
      max_tokens: 500,
    });

    return NextResponse.json({ result: response.choices[0].message?.content });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
