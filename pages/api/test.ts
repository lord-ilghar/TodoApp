import { NextApiRequest, NextApiResponse } from "next";

const fuck = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ msg: "fuck ypu" });
};
export default fuck;
