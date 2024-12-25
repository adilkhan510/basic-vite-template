import { z } from "zod";

export const duasSchema = z.object({
  id: z.string(),
  name: z.string(),
});
