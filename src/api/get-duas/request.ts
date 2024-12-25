import { api } from "../api";
import { duasSchema } from "./schema";

export const getDuas = async () => {
  const res = await api.query("duas").get();
  const parsed = duasSchema.parse(res);
  return parsed;
};
