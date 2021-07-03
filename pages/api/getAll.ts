import { NextApiRequest, NextApiResponse } from "next";
import nedb from "nedb";
function Getall(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const db = new nedb("data/db/db.db");
    db.loadDatabase();
    db.find({}, (err: Error, data: any) => {
      if (!err) res.status(200).json(data);
      else res.status(400).json({ msg: "error while finding", err: err });
    });
  }
}

export default Getall;
