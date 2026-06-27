export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="logo" aria-label="EloCircular">
      <span className="logo-symbol" />
      <span className={dark ? "logo-text dark" : "logo-text"}>
        <b>Elo</b><strong>Circular</strong>
      </span>
    </div>
  );
}
