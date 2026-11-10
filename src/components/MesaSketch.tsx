"use client";

import { useState } from "react";

type Role = "Waiter" | "Manager";
type Status = "Free" | "Seated" | "Bill requested";

const tables: { id: number; status: Status; total: number }[] = [
  { id: 1, status: "Free", total: 0 },
  { id: 2, status: "Seated", total: 18400 },
  { id: 3, status: "Bill requested", total: 42900 },
  { id: 4, status: "Seated", total: 9600 },
  { id: 5, status: "Free", total: 0 },
  { id: 6, status: "Seated", total: 27300 },
];

const actions: { label: string; managerOnly: boolean }[] = [
  { label: "Add item", managerOnly: false },
  { label: "Split bill", managerOnly: false },
  { label: "Void item", managerOnly: true },
  { label: "Apply discount", managerOnly: true },
];

const clp = (n: number) => `$${n.toLocaleString("es-CL")}`;

export function MesaSketch() {
  const [role, setRole] = useState<Role>("Waiter");
  const [selected, setSelected] = useState(2);
  const table = tables.find((t) => t.id === selected)!;

  return (
    <figure className="sketch mesa">
      <div className="mesa-top">
        <span className="mesa-title">Floor</span>
        <div className="segmented" role="group" aria-label="Signed in as">
          {(["Waiter", "Manager"] as const).map((r) => (
            <button key={r} type="button" aria-pressed={role === r} onClick={() => setRole(r)}>
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="mesa-floor">
        {tables.map((t) => (
          <button
            key={t.id}
            type="button"
            className="mesa-table"
            data-status={t.status}
            aria-pressed={selected === t.id}
            aria-label={`Table ${t.id}, ${t.status}`}
            onClick={() => setSelected(t.id)}
          >
            <span className="mesa-num">{t.id}</span>
            <span className="mesa-status">{t.status}</span>
          </button>
        ))}
      </div>

      <div className="mesa-panel" aria-live="polite">
        <p className="mesa-panel-head">
          <strong>Table {table.id}</strong>
          <span>{table.total ? clp(table.total) : "No open order"}</span>
        </p>
        <ul>
          {actions.map((a) => {
            const allowed = !a.managerOnly || role === "Manager";
            return (
              <li key={a.label} data-allowed={allowed}>
                <span>{a.label}</span>
                <span className="mesa-perm">{allowed ? "Allowed" : "Manager only"}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <figcaption>
        Interactive sketch, not the production UI. Switch roles to see how permissions change what each
        person can do.
      </figcaption>
    </figure>
  );
}
