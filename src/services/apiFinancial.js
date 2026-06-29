import { apiRequest } from "../utils/apiClients";

export const getTeacherFinancialData = async () => {
  return await apiRequest("/financial/teacher/monthly-income");
};
