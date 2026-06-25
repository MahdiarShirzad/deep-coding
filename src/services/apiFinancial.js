import { apiRequest } from "./apiClient";

export const getTeacherFinancialData = async () => {
  return await apiRequest("/financial/teacher/monthly-income");
};
