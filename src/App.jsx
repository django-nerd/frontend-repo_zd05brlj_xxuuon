import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardOverview from "./components/DashboardOverview";
import BotControls from "./components/BotControls";

function App() {
  const [tab, setTab] = useState("dashboard");

  const renderContent = () => {
    switch (tab) {
      case "dashboard":
        return (
          <div className="space-y-4">
            <DashboardOverview />
            <BotControls />
          </div>
        );
      case "fitur":
        return (
          <div className="p-4 rounded-xl border bg-white">
            <h3 className="font-semibold text-lg">Fitur</h3>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
              <li>Perintah !menu untuk melihat daftar fitur</li>
              <li>Perintah !stiker untuk membuat stiker dari gambar/gif/video</li>
              <li>Perintah !owner untuk kontak pemilik</li>
            </ul>
          </div>
        );
      case "cmd":
        return (
          <div className="p-4 rounded-xl border bg-white">
            <h3 className="font-semibold text-lg">Commands</h3>
            <pre className="text-xs bg-gray-50 p-3 rounded-lg overflow-auto">{`!menu\n!stiker (kirim media)\n!owner`}</pre>
          </div>
        );
      case "users":
        return (
          <div className="p-4 rounded-xl border bg-white">
            <h3 className="font-semibold text-lg">Users</h3>
            <p className="text-sm text-gray-600">Data pengguna akan tampil di sini.</p>
          </div>
        );
      case "settings":
        return (
          <div className="p-4 rounded-xl border bg-white space-y-3">
            <h3 className="font-semibold text-lg">Settings</h3>
            <label className="block">
              <span className="text-sm text-gray-600">Owner Number</span>
              <input
                defaultValue="083175858167"
                className="mt-1 w-full border rounded-lg px-3 py-2"
                readOnly
              />
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
      <Sidebar current={tab} onChange={setTab} />

      <div className="flex-1 flex flex-col">
        <Header title="WhatsApp Bot" subtitle="Dashboard & Controls" />
        <main className="px-4 md:px-8 py-6">
          <div className="max-w-6xl mx-auto">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}

export default App;
