import type { NextApiRequest, NextApiResponse } from "next";
import googleTranslate from "translate-google";
import axios from "axios";
import { load as cheerioLoad } from "cheerio";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { word } = req.query;
    // const resp = await axios.get(`https://www.wordreference.com/deen/${word}`);
    // const $ = cheerioLoad(resp.data);
    // const table = $("#articleWRD");
    // const rows = table.find("tr").toArray();
    // const words = rows
    //   .flatMap((row) => {
    //     return row.children.filter(
    //       (child: any) => child.attribs?.class === "ToWrd" || "FrWrd"
    //     );
    //   })
    //   .flatMap((c: any) =>
    //     c.children
    //       ?.map((c: any) => [
    //         c.attribs?.class === "ToWrd" ? "to" : "from",
    //         c.data?.trim(),
    //       ])
    //       .filter(([_, d]: ITranslation) => d?.length)
    //   )
    //   .filter(Boolean);

    // console.log({
    //   data: rows,
    // });
    const translation = await googleTranslate(word, { to: "en" });
    res.status(200).json(translation);
  } catch (e) {
    res.status(500).json(e);
  }
}
