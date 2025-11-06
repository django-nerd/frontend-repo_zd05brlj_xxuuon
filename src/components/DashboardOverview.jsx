import { useEffect, useState } from "react";

export default function DashboardOverview() {
  const [status, setStatus] = useState({ connected: false, number: null });

  useEffect(() => {
    // This UI is frontend-only; in a full app you'd fetch real status
    const cached = localStorage.getItem("wa-bot-status");
    if (cached) setStatus(JSON.parse(cached));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 rounded-xl border bg-white">
        <p className="text-sm text-gray-500">Connection</p>
        <p className="text-2xl font-semibold mt-1">
          {status.connected ? "Connected" : "Not connected"}
        </p>
        <p className="text-gray-500 text-sm mt-1">
          {status.number ? `Linked: ${status.number}` : "No session active"}
        </p>
      </div>
      <div className="p-4 rounded-xl border bg-white">
        <p className="text-sm text-gray-500">Total Users</p>
        <p className="text-2xl font-semibold mt-1">—</p>
      </div>
      <div className="p-4 rounded-xl border bg-white">
        <p className="text-sm text-gray-500">Commands Used</p>
        <p className="text-2xl font-semibold mt-1">—</p>
      </div>
    </div>
  );
}
