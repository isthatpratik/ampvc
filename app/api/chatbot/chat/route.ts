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
        { role: "system", content: "You are FynarAi an AI VC matchmaking chatbot by Ampersand. look the vc_data.json present in public folder.Match with only 3 parameters. After matching only show investors name in list format and mention contact Ampersand Team. Give only information realted to Vcs investors or startups." },
        ...chatHistory,
      ],
      max_tokens: 500,
    });

    const content = response.choices[0].message?.content?.trim() ?? "";
    return NextResponse.json({ result: content });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}