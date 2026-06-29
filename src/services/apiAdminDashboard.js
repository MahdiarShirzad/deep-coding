import { apiRequest } from "../utils/apiClients";

export const fetchAdminDashboardData = async () => {
  const res = await apiRequest("/financial/admin/dashboard");

  return res.data;
};
