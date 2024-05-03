import { Product } from "./Product";

export interface Response{
  code: number,
  status: string,
  data: Product[]
}
