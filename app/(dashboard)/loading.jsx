export default function DashboardLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header skeleton */}
      <div className="flex items-center justify-between">
        <div className="h-10 w-48 bg-muted/50 rounded-lg"></div>
        <div className="h-10 w-32 bg-muted/50 rounded-lg"></div>
      </div>
      
      {/* Overview Cards Skeleton */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-40 bg-card/50 border border-white/5 rounded-3xl"></div>
        ))}
      </div>

      {/* Main Chart Skeleton */}
      <div className="h-[400px] w-full bg-card/50 border border-white/5 rounded-3xl"></div>
    </div>
  );
}
