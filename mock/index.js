/* eslint-disable quotes */
import widgetData from "./json/serverWidgetsData.json";
import chartData from "./json/serverChartData.json";

export default {
  "GET /api/dashboard/widgets": widgetData,
  "GET /api/dashboard/chart": chartData,
};
