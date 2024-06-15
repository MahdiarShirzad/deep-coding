import supabase from "./supabase";

export async function getBlogs() {
  let { data, error } = await supabase.from("blogs").select("*");

  if (error) {
    console.log(error);
  }

  return data;
}
