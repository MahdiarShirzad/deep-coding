import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:9000";

const initialAuthState = {
  isAuthenticated: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      // درخواست برای دریافت اطلاعات کاربران از سرور
      const usersResponse = await axios.get(`${BASE_URL}/users`);

      // چک کردن تکراری بودن ایمیل
      const isEmailExists = usersResponse.data.some(
        (user) => user.email === userData.email
      );

      if (isEmailExists) {
        // اگر ایمیل تکراری بود، خطا را بازگردان
        return rejectWithValue({ message: "این ایمیل قبلاً ثبت شده است." });
      }

      // اگر ایمیل تکراری نبود، ادامه ثبت نام
      const registerResponse = await axios.post(`${BASE_URL}/users`, userData);

      if (registerResponse.status === 200) {
        // ثبت نام موفق بود، می‌توانید پیغام موفقیت را نمایش دهید
        console.log("شما با موفقیت ثبت نام کرده اید");

        // همچنین می‌توانید وارد کردن کاربر به حالت ورود شده را انجام دهید
        dispatch(authActions.login());
        return registerResponse.data;
      } else {
        // اگر خطایی رخ داد، خطا را بازگردان
        return rejectWithValue(registerResponse.data);
      }
    } catch (error) {
      // در صورت خطا، خطا را بازگردان
      return rejectWithValue(error.response.data);
    }
  }
);

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
