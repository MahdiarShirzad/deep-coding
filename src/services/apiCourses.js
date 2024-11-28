import supabase from "./supabase";

export async function getCourses() {
  let { data, error } = await supabase.from("courses").select("*");

  if (error) {
    console.log(error);
  }

  return data;
}

// Fetch courses by teacher name
export async function getCoursesByTeacherName(teacherName) {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("teacher", teacherName);

  if (error) {
    console.error("Error fetching courses by teacher name:", error);
    return null;
  }
  return data;
}

export async function getTeacherByCourseName(courseName) {
  const { data, error } = await supabase
    .from("teachers")
    .select("*")
    .eq("course_name", courseName);

  if (error) {
    console.error("Error fetching teacher by course name:", error);
    return null;
  }
  return data;
}
