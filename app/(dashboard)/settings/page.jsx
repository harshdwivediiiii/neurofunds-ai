import React from 'react';

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account preferences and configurations.</p>
      </div>
      
      <div className="grid gap-6">
        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Profile</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Theme Preference</p>
                <p className="text-sm text-muted-foreground">Dark mode is recommended for the premium feel.</p>
              </div>
              <div className="h-8 w-16 bg-white/10 rounded-full border border-white/5"></div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-[2rem] p-8 border-danger/20">
          <h2 className="text-xl font-bold mb-6 border-b border-danger/10 pb-4 text-danger">Danger Zone</h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Delete Account</p>
              <p className="text-sm text-muted-foreground">Permanently delete your account and all financial data.</p>
            </div>
            <button className="px-4 py-2 bg-danger/10 text-danger hover:bg-danger hover:text-white transition-colors rounded-lg font-medium text-sm">
              Delete Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
