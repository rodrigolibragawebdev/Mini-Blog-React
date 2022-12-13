import { useLocation } from "react-router-dom";
// HOOK USADO PARA PERFORMANCE ('CACHE' DE VALORES)
import { useMemo } from "react";

export function useQuery() {
  const { search } = useLocation();

  // SÓ EXECUTA QUANDO O SEARCH FOR ALTEARDO
  return useMemo(() => new URLSearchParams(search), [search]);
}
