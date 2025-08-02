import { Database } from "./supabase"
/*
https://stackoverflow.com/questions/77520175/how-to-use-types-provided-by-supabase-in-my-typescript-project
*/

export type Posters = Database["public"]["Tables"]["posters"]["Row"]
export type Credits = Database["public"]["Tables"]["credits"]["Row"]
export type Models = Database["public"]["Tables"]["models"]["Row"]
