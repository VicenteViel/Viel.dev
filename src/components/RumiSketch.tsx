const clp = (n: number) => `$${n.toLocaleString("es-CL")}`;

// Mirrors Rumi's real rules: integer pesos, payer absorbs the leftover, pairwise netted debts.
const split = [
  { name: "Camila", amount: 3334, paid: true },
  { name: "Diego", amount: 3333, paid: false },
  { name: "Sofía", amount: 3333, paid: false },
];

export function RumiSketch() {
  return (
    <figure className="sketch rumi">
      <div className="phone" aria-hidden="true">
        <div className="phone-notch" />
        <p className="phone-group">Depto Providencia</p>
        <p className="phone-label">Your balance</p>
        <p className="phone-balance">{clp(7000)}</p>
        <p className="phone-sub">Camila owes you</p>

        <div className="phone-card">
          <p className="phone-card-head">
            <span>Groceries</span>
            <strong>{clp(10000)}</strong>
          </p>
          {split.map((s) => (
            <p key={s.name} className="phone-row">
              <span>
                {s.name}
                {s.paid && <em> paid</em>}
              </span>
              <span>{clp(s.amount)}</span>
            </p>
          ))}
        </div>

        <div className="phone-card">
          <p className="phone-row">
            <span>Camila → Diego</span>
            <span>{clp(10000)}</span>
          </p>
          <p className="phone-row">
            <span>Diego → Camila</span>
            <span>{clp(3000)}</span>
          </p>
          <p className="phone-row phone-net">
            <span>Netted</span>
            <span>{clp(7000)}</span>
          </p>
        </div>
      </div>
      <figcaption>
        $10.000 split three ways never loses a peso: the payer absorbs the remainder, and debts between two
        people are netted into one.
      </figcaption>
    </figure>
  );
}
