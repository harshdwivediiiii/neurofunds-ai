import React from 'react';

export default function BudgetsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Budgets</h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="h-[200px] glass-card rounded-[2rem] p-6 flex flex-col justify-center items-center text-muted-foreground">
          <p className="font-medium">Dining Budget</p>
          <div className="w-full h-2 bg-white/10 rounded-full mt-4">
            <div className="h-full bg-primary rounded-full w-[60%]"></div>
          </div>
        </div>
        <div className="h-[200px] glass-card rounded-[2rem] p-6 flex flex-col justify-center items-center text-muted-foreground">
          <p className="font-medium">Transport Budget</p>
          <div className="w-full h-2 bg-white/10 rounded-full mt-4">
            <div className="h-full bg-success rounded-full w-[30%]"></div>
          </div>
        </div>
        <div className="h-[200px] glass-card rounded-[2rem] p-6 flex flex-col justify-center items-center text-muted-foreground border-dashed">
          <p className="font-medium">+ Create Budget</p>
        </div>
      </div>
    </div>
  );
}
