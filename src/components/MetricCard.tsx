export function MetricCard({ title, value, hint, icon }: { title: string; value: string; hint?: string; icon?: string }) {
  return (
    <article className="metric-card">
      <div className="metric-icon">{icon ?? "●"}</div>
      <div>
        <strong>{value}</strong>
        <span>{title}</span>
        {hint ? <small>{hint}</small> : null}
      </div>
    </article>
  );
}
