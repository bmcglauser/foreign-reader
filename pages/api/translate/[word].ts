import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = process.env.API_KEY;
  const endpoint = "https://api.cognitive.microsofttranslator.com";
  const { word } = req.query;

  const resp = await axios.post(
    `${endpoint}/translate`,
    [
      {
        Text: word,
      },
    ],
    {
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey,
        "Ocp-Apim-Subscription-Region": process.env.LOCATION,
        "Content-type": "application/json; charset=UTF-8",
      },
      params: {
        from: process.env.FROM,
        to: process.env.TO,
        "api-version": "3.0",
      },
      responseType: "json",
    }
  );
  res.status(200).json(resp.data[0]?.["translations"]);
}
