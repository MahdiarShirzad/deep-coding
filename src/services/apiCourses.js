import supabase from "./supabase";

export async function getCourses() {
  let { data, error } = await supabase.from("courses").select("*");

  if (error) {
    console.log(error);
  }

  return data;
}
