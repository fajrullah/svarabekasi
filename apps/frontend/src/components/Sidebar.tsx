// src/components/Sidebar.tsx
"use client";

const questionGroups = [
  {
    title: "Layanan Kependudukan",
    questions: [
      "Gimana sih cara bikin KTP baru?",
      "Ngurus KK ribet nggak? Apa aja yang perlu disiapin?"
    ]
  },
  {
    title: "Pendidikan & Kesehatan",
    questions: [
      "Sekolah deket rumah ada yang bagus nggak ya?",
      "Kalau mau berobat gratis, kemana enaknya?"
    ]
  },
  {
    title: "Pembayaran & Pajak",
    questions: [
      "Bayar pajak daerah di mana yang paling gampang?",
      "Tagihan listrik bisa dibayar online nggak sih?"
    ]
  },
  {
    title: "Navigasi Kota",
    questions: [
      "Kantor pemerintahan deket sini di mana ya?",
      "Kalau butuh nomor darurat, cari di mana bro?"
    ]
  }
];

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full">
      {/* Scrollable Questions Section */}
      <div className="flex-1 overflow-y-auto chat-scrollbar py-2 px-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-600">Yang sering ditanyakan</h2>
        
        {questionGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-6">
            <h3 className="text-sm font-medium uppercase text-gray-500 mb-2 tracking-wider">
              {group.title}
            </h3>
            <ul className="space-y-1">
              {group.questions.map((q, i) => (
                <li
                  key={i}
                  className={`cursor-pointer px-3 py-2.5 rounded-md text-gray-700
                            hover:bg-gray-200 active:bg-gray-400 transition-colors duration-200
                            ${i === 0 && groupIndex === 0 ? 'bg-gray-200' : ''}`}
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Sticky Footer */}
      <div className="sticky bottom-0 p-4">
        <div className="mb-3">
          <p className="text-sm text-gray-600">Butuh bantuan?</p>
        </div>
        <button className="w-full py-2 px-4 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors">
          Hubungi kami
        </button>
        <div className="mt-3 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Svara Bekasi
        </div>
      </div>
    </div>
  );
}