import supabase from "./supabase";

export async function getTeachers() {
  let { data, error } = await supabase.from("teachers").select("*");

  if (error) {
    console.log(error);
  }

  return data;
}
