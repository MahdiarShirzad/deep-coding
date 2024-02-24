import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:9000";

const fetchCourses = createAsyncThunk("data/fetchCourses", async () => {
  const response = await axios.get(`${BASE_URL}/courses/`);
  return response.data;
});

const fetchBlogs = createAsyncThunk("data/fetchBlogs", async () => {
  const response = await axios.get(`${BASE_URL}/blogs/`);
  return response.data;
});

const fetchTeachers = createAsyncThunk("data/fetchTeachers", async () => {
  const response = await axios.get(`${BASE_URL}/teachers`);
  return response.data;
});

const fetchBooks = createAsyncThunk("data/fetchBooks", async () => {
  const response = await axios.get(`${BASE_URL}/books`);
  return response.data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: { courses: [], blogs: [], teachers: [], books: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.teachers = action.payload;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
      });
  },
});

export { fetchCourses, fetchBlogs, fetchTeachers, fetchBooks };
export default dataSlice.reducer;
