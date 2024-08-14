import { error } from "console";
import { promises as fs } from "fs";
export async function POST(request) {
  const reqBody = await request.json();

  const data = await fs.writeFile(
    "public/Widgets.json",
    JSON.stringify(reqBody),
    (error) => {
      if (error) console.log(error);
      else console.log("Write Success");
    }
  );

  return Response.json({ test: "sc" });
}
