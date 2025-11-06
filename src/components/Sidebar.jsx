import { Home, Bolt, Terminal, Users, Settings } from "lucide-react";

const items = [
  { key: "dashboard", label: "Dashboard", icon: Home },
  { key: "fitur", label: "Fitur", icon: Bolt },
  { key: "cmd", label: "Cmd", icon: Terminal },
  { key: "users", label: "Users", icon: Users },
  { key: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ current, onChange }) {
  return (
    <aside className="h-screen w-64 bg-white border-r border-gray-200 p-4 hidden md:flex md:flex-col">
      <div className="flex items-center gap-2 mb-8">
        <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">
          WB
        </div>
        <div>
          <p className="text-sm text-gray-500 leading-none">WhatsApp</p>
          <h2 className="text-lg font-semibold leading-none">Bot Dashboard</h2>
        </div>
      </div>

      <nav className="space-y-1">
        {items.map(({ key, label, icon: Icon }) => {
          const active = current === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={
                "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition " +
                (active
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-gray-700 hover:bg-gray-50")
              }
            >
              <Icon size={18} />
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto text-xs text-gray-500">
        <p>Built with Baileys</p>
      </div>
    </aside>
  );
}
