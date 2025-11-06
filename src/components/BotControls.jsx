import { useEffect, useState } from "react";

export default function BotControls() {
  const [hasSession, setHasSession] = useState(false);
  const [qr, setQr] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("wa-bot-session");
    setHasSession(!!stored);
  }, []);

  const handleStart = async () => {
    setLoading(true);
    try {
      // In a full implementation this would call backend to init Baileys
      if (hasSession) {
        // directly connect (simulated)
        localStorage.setItem(
          "wa-bot-status",
          JSON.stringify({ connected: true, number: "previous-session" })
        );
        setQr(null);
      } else {
        // simulate QR generation
        const fake =
          "data:image/svg+xml;utf8," +
          encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='256' height='256'><rect width='100%' height='100%' fill='white'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='16'>QR CODE HERE</text></svg>`
          );
        setQr(fake);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSession = () => {
    localStorage.setItem("wa-bot-session", JSON.stringify({ createdAt: Date.now() }));
    setHasSession(true);
  };

  const handleClear = () => {
    localStorage.removeItem("wa-bot-session");
    localStorage.removeItem("wa-bot-status");
    setHasSession(false);
    setQr(null);
  };

  return (
    <div className="p-4 rounded-xl border bg-white space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={handleStart}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-70"
          disabled={loading}
        >
          {loading ? "Starting..." : "Start"}
        </button>
        {!hasSession && (
          <button
            onClick={handleSaveSession}
            className="px-4 py-2 rounded-lg bg-emerald-600 text-white"
          >
            Simulate Save Session
          </button>
        )}
        <button onClick={handleClear} className="px-4 py-2 rounded-lg bg-gray-100">
          Reset
        </button>
      </div>
      {qr && (
        <div>
          <p className="text-sm text-gray-500 mb-2">Scan this QR with WhatsApp</p>
          <img src={qr} alt="QR" className="w-56 h-56 border rounded-lg" />
        </div>
      )}
    </div>
  );
}
