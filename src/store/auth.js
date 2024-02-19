import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:9000";

const initialAuthState = {
  isAuthenticated: false,
  isEmailExists: false,
  errorMessage: "",
  username: "",
  savedUser: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const usersResponse = await axios.get(`${BASE_URL}/users`);

      const isEmailExists = usersResponse.data.some(
        (user) => user.email === userData.email
      );

      if (isEmailExists) {
        return rejectWithValue({ message: "این ایمیل قبلاً ثبت شده است." });
      }

      const registerResponse = await axios.post(`${BASE_URL}/users`, userData);

      if (registerResponse.status === 200) {
        console.log("شما با موفقیت ثبت نام کرده اید");

        dispatch(authActions.login());
        return registerResponse.data;
      } else {
        return rejectWithValue(registerResponse.data);
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      // Fetch the list of users from the server
      const usersResponse = await axios.get(`${BASE_URL}/users`);
      const users = usersResponse.data;

      // Find the user by email or username
      const user = users.find(
        (u) => u.email === userData.username || u.userName === userData.username
      );

      if (!user) {
        console.log("bilakh");
        return rejectWithValue({ message: "ثبت نام نکرده‌اید." });
      }

      // Verify the password
      if (user.password === userData.password) {
        // Dispatch setSavedUser action with user information
        dispatch(authActions.setSavedUser(user));

        // Dispatch login action
        dispatch(authActions.login());

        return user;
      } else {
        return rejectWithValue({
          message: "نام کاربری یا رمز عبور اشتباه است.",
        });
      }
    } catch (error) {
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
      state.savedUser = null;
      localStorage.removeItem("savedUser");
      state.username = "";
    },

    setEmailExists(state, action) {
      state.isEmailExists = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    setSavedUser(state, action) {
      state.isAuthenticated = true;
      state.savedUser = action.payload;
      state.username = action.payload?.userName || "";
      localStorage.setItem("savedUser", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.savedUser = action.payload;
      localStorage.setItem("savedUser", JSON.stringify(action.payload));
      state.username = action.payload.userName;
      console.log("اطلاعات کاربر:", action.payload);
    });
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
    builder.addCase(authActions.logout, (state) => {
      state.isAuthenticated = false;
      state.savedUser = null;
      localStorage.removeItem("savedUser");
      state.username = "";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      if (
        action.payload &&
        action.payload.message === "نام کاربری یا رمز عبور اشتباه است."
      ) {
        state.errorMessage = "نام کاربری یا رمز عبور اشتباه است.";
      } else {
        state.errorMessage = "خطا در ورود.";
      }
    });
  },
});

export const authActions = {
  ...authSlice.actions,
  registerUser,
  loginUser,
  setSavedUser: (user) => ({
    type: "authentication/setSavedUser",
    payload: user,
  }),
};

export default authSlice.reducer;
