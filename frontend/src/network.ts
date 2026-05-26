import {
  MAINNET_CONFIG,
  TESTNET_CONFIG,
  type SorobanIdentityConfig,
} from "../../sdk/src/index";

export type NetworkName = "testnet" | "mainnet";

/**
 * Resolve the active network from the `VITE_NETWORK` env var.
 *
 * Anything other than the literal string "mainnet" falls back to testnet —
 * the safe default for development.
 */
export function getActiveNetwork(): NetworkName {
  const raw = (import.meta.env.VITE_NETWORK ?? "").toString().toLowerCase();
  return raw === "mainnet" ? "mainnet" : "testnet";
}

export function getNetworkConfig(network: NetworkName = getActiveNetwork()): SorobanIdentityConfig {
  return network === "mainnet" ? MAINNET_CONFIG : TESTNET_CONFIG;
}

export function isMainnet(network: NetworkName = getActiveNetwork()): boolean {
  return network === "mainnet";
}
