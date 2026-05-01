import React from 'react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Analytics</h1>
        <div className="text-sm text-muted-foreground bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
          Last 30 Days
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="h-[350px] glass-card rounded-[2rem] p-6 flex flex-col justify-center items-center text-muted-foreground">
          <p className="font-medium">Spending by Category Chart</p>
          <p className="text-xs mt-2 opacity-50">(Lazy loaded component goes here)</p>
        </div>
        <div className="h-[350px] glass-card rounded-[2rem] p-6 flex flex-col justify-center items-center text-muted-foreground">
          <p className="font-medium">Monthly Trends Chart</p>
          <p className="text-xs mt-2 opacity-50">(Lazy loaded component goes here)</p>
        </div>
        <div className="h-[350px] md:col-span-2 glass-card rounded-[2rem] p-6 flex flex-col justify-center items-center text-muted-foreground">
          <p className="font-medium">Net Worth Growth Chart</p>
          <p className="text-xs mt-2 opacity-50">(Lazy loaded component goes here)</p>
        </div>
      </div>
    </div>
  );
}
