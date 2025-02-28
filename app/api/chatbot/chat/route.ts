import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { chatHistory } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are FynarAi, an AI VC matchmaking chatbot by Ampersand. Look at the vc_data.json present in the public folder. Match with the parameters. After matching, only show investor names in numbered list format and strictly use proper formatting and spacing. At the end of the list, include the text '[Download Full List]'. Give only information related to VCs, investors, or startups." },
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