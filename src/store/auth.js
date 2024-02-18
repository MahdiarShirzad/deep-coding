import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:9000";

const initialAuthState = {
  isAuthenticated: false,
};

// auth.js

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      // بررسی وجود ایمیل
      const emailCheckResponse = await axios.get(
        `${BASE_URL}/users?email=${userData.email}`
      );

      // اگر ایمیل موجود بود، خطا را بازگردان
      if (emailCheckResponse.data.length > 0) {
        return rejectWithValue({ message: "این ایمیل قبلاً ثبت شده است." });
      }

      // ارسال درخواست POST برای ثبت نام
      const registerResponse = await axios.post(`${BASE_URL}/users`, userData);

      // بررسی وضعیت پاسخ سرور
      if (registerResponse.status === 200) {
        // اگر موفق بود، اطلاعات کاربر وارد شده را برگردان
        return registerResponse.data;
      } else {
        // در غیر اینصورت، خطا را بازگردان
        return rejectWithValue(registerResponse.data);
      }
    } catch (error) {
      // در صورت خطا، خطا را بازگردان
      return rejectWithValue(error.response.data);
    }
  }
);

// auth.js

const authSlice = createSlice({
  name: "authentication",
  initialState: { ...initialAuthState, isEmailExists: false, errorMessage: "" },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    // اضافه کردن یک اکشن جدید برای تنظیم وضعیت ایمیل موجود
    setEmailExists(state, action) {
      state.isEmailExists = action.payload;
    },
    // اضافه کردن یک اکشن جدید برای ثبت پیغام خطا
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
    });
    // اضافه کردن دو case برای بررسی خطاهای مرتبط با وجود ایمیل موجود
    builder.addCase(registerUser.rejected, (state, action) => {
      if (
        action.payload &&
        action.payload.message === "این ایمیل قبلاً ثبت شده است."
      ) {
        state.isEmailExists = true;
      } else {
        state.errorMessage = "خطا در ثبت نام.";
      }
    });
  },
});

export const authActions = { ...authSlice.actions, registerUser };

export default authSlice.reducer;
