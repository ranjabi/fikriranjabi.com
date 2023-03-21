// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ProjectItemProps } from "@/interfaces";
import connect from "@/middleware/mongodb";
// import connect from '@/middleware/mongodb'
import Project from "@/models/project";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    const projects = await Project.find();
    return res.status(200).json({ data: projects, error: null });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({ data: null, error: err.message });
    }
  }
};

export default connect(handler);
