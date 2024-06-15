import supabase from "./supabase";

export async function getBooks() {
  let { data, error } = await supabase.from("books").select("*");

  if (error) {
    console.log(error);
  }

  return data;
}
