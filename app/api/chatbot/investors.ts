import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
import xlsx from "xlsx";

interface ChatMessage {
  role: string;
  content: string;
}

interface Investor {
  name: string;
  Sector: string;
  Stage: string;
  Requirements: string | null;
  "Focus Countries": string;
  "Firm Type": string;
  Thesis: string;
  "Min Investment": number;
  "Max Investment": number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { chatHistory }: { chatHistory: ChatMessage[] } = req.body;
    const startupDetails = extractStartupDetails(chatHistory);

    // Load JSON data
    const jsonPath = path.join(process.cwd(), "public", "vc_data.json");
    const jsonData: Investor[] = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

    // Load Excel data if needed
    const xlsxPath = path.join(process.cwd(), "public", "vc_data.xlsx");
    const workbook = xlsx.readFile(xlsxPath);
    const sheetName = workbook.SheetNames[0];
    const excelData: Investor[] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Combine data
    const investors: Investor[] = [...jsonData, ...excelData];

    // Match investors based on startup details
    const matchedInvestors = investors
      .filter((investor: Investor) => isMatchingInvestor(investor, startupDetails))
      .map((investor: Investor) => investor.name); // Only return investor names

    return res.status(200).json({ investors: matchedInvestors });
  } catch (error) {
    console.error("Error processing investors:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Extract startup details from chat messages
function extractStartupDetails(chatHistory: ChatMessage[]): string {
  return chatHistory.find((msg) => msg.role === "user")?.content || "";
}

// Check if an investor matches the startup's details
function isMatchingInvestor(investor: Investor, startupDetails: string): boolean {
  return startupDetails
    .toLowerCase()
    .split(" ")
    .some((detail) => investor.name.toLowerCase().includes(detail));
}