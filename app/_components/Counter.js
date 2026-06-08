"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>There Are {users.length} Users.</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        {count}
      </button>
    </div>
  );
}
