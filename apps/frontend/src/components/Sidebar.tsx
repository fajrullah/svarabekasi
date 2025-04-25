// src/components/Sidebar.tsx
"use client";

const questions = [
  "How to reset my password?",
  "Where can I see my billing?",
  "How to contact support?",
  "How do I upgrade my plan?",
  "Can I cancel anytime?",
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4">
      <h2 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-200">Most Asked</h2>
      <ul className="space-y-3">
        {questions.map((q, i) => (
          <li
            key={i}
            className="cursor-pointer p-3 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition"
          >
            {q}
          </li>
        ))}
      </ul>
    </aside>
  );
}
