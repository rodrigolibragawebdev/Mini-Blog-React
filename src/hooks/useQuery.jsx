import { useLocation } from "react-router-dom";
// para performance:
import { useMemo } from "react";

// a = {}; sabe quando altera a ou b
// b = {};

// cache de valores

//----------------------------------------------------------------

export function useQuery() {
  const { search } = useLocation();

  // só executa qnd o search for alterado
  return useMemo(() => new URLSearchParams(search), [search]);
}
