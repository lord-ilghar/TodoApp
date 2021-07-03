import { NextApiResponse, NextApiRequest } from "next";

import nedb from "nedb";

const db: nedb = new nedb("data/db/db.db");
function Addtodo(req: NextApiRequest, res: NextApiResponse): void {
  if (req.method == "POST" && req.body.title != "") {
    console.log(req.body);
    db.loadDatabase((err) => {
      if (err) {
        res.status(400).json({
          msg: "can not open the database",
          err: err,
        });
      }
    });
    db.insert(req.body, (err, doc) => {
      if (!err)
        res.status(200).json({
          msg: "done succses fully",
          doc: doc,
        });
    });
  }
}

export default Addtodo;
