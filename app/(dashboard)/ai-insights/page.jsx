import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function AIInsightsPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto px-4">
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-indigo-500/20 rounded-xl">
          <Sparkles className="w-6 h-6 text-indigo-400" />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">
          AI Insights
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* LEFT PANEL */}
        <div className="md:col-span-1 space-y-4">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Proactive Alerts
          </h2>

          {/* CARD 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 border-l-4 border-red-500">
            <h3 className="font-bold mb-1">Overspending Detected</h3>
            <p className="text-sm text-gray-400">
              You spent 18% more on dining this month.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 border-l-4 border-yellow-500">
            <h3 className="font-bold mb-1">Subscription Warning</h3>
            <p className="text-sm text-gray-400">
              Netflix price increased by $2/mo.
            </p>
          </div>
        </div>

        {/* CHAT PANEL */}
        <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl flex flex-col overflow-hidden min-h-[500px]">

          {/* HEADER */}
          <div className="p-4 border-b border-white/10 bg-white/5">
            <p className="font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              NeuroFunds Assistant
            </p>
          </div>

          {/* CHAT BODY */}
          <div className="flex-1 p-6 flex flex-col justify-end space-y-4">
            
            {/* USER MESSAGE */}
            <div className="flex justify-end">
              <div className="bg-indigo-500 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                How can I optimize my savings this month?
              </div>
            </div>

            {/* AI MESSAGE */}
            <div className="flex justify-start">
              <div className="bg-white/10 text-white px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%] text-sm leading-relaxed border border-white/10">
                Based on your cash flow, I recommend moving{" "}
                <span className="font-bold text-green-400">$450</span> to your
                savings account. You also have $80 in unused subscriptions.
              </div>
            </div>
          </div>

          {/* INPUT */}
          <div className="p-4 border-t border-white/10 bg-black/20">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask your financial AI..."
                className="w-full bg-white/5 border border-white/10 rounded-full h-12 pl-6 pr-12 text-sm focus:outline-none focus:border-indigo-500 transition"
              />
              <button className="absolute right-2 top-2 p-2 bg-indigo-500 text-white rounded-full hover:scale-105 transition">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}