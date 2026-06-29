import { apiRequest } from "./apiClient.js";

export const fetchAdminDashboardData = async () => {
  const res = await apiRequest("/financial/admin/dashboard");

  return res.data;
};
