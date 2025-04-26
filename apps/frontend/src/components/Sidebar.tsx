// src/components/Sidebar.tsx
"use client";

const questionGroups = [
  {
    title: "Account",
    questions: [
      "How to reset my password?",
      "Can I change my email address?",
      "How to delete my account?",
      "Where can I update my profile?",
      "Why can't I log in?"
    ]
  },
  {
    title: "Billing",
    questions: [
      "Where can I see my billing?",
      "How do I update payment method?",
      "Can I cancel anytime?",
      "Do you offer refunds?",
      "Where are my invoices?"
    ]
  },
  {
    title: "Support",
    questions: [
      "How to contact support?",
      "What's your response time?",
      "Do you have phone support?",
      "Where are the docs?",
      "Can I book a demo?"
    ]
  }
];

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full">
      {/* Scrollable Questions Section */}
      <div className="flex-1 overflow-y-auto chat-scrollbar p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Frequently Asked</h2>
        
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
      <div className="sticky bottom-0 border-t border-gray-200 p-4">
        <div className="mb-3">
          <p className="text-sm text-gray-600">Need more help?</p>
        </div>
        <button className="w-full py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
          Contact Support
        </button>
        <div className="mt-3 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Svara Bekasi
        </div>
      </div>
    </div>
  );
}