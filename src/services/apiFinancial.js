import { apiRequest } from "./apiClient.js";

export const getTeacherFinancialData = async () => {
  return await apiRequest("/financial/teacher/monthly-income");
};
