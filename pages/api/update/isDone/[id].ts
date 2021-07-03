import { NextApiResponse, NextApiRequest } from "next";

import nedb from "nedb";

const db: nedb = new nedb("data/db/db.db");
function Update(req: NextApiRequest, res: NextApiResponse): void {
  if (req.method == "POST") {
    console.log(req.body);
    db.loadDatabase((err) => {
      if (err) {
        res.status(400).json({
          msg: "can not open the database",
          err: err,
        });
      }
    });
    db.update(
      { _id: req.query.id },
      { $set: { done: req.body.done } },
      { multi: false },
      (err) => {
        if (err) res.json({ err });
        else res.json({ msg: "done" });
      }
    );
  }
}

export default Update;
