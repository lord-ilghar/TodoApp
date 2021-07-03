import { NextApiRequest, NextApiResponse } from "next";
import nedb from "nedb";

function sendIsDoings(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const db = new nedb("data/db/db.db");
    db.loadDatabase();
    db.find({ isDoing: true }, (err: Error, docs: any) => {
      if (err) res.status(400).json({ msg: "error while finding", error: err });
      else res.status(200).json({ documents: docs });
    });
  }
}

export default sendIsDoings;
