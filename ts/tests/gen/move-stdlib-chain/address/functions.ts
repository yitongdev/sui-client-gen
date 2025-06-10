import { PUBLISHED_AT } from "../constants.js";
import { Transaction } from "@mysten/sui/transactions";

export function length(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::address::length`,
    arguments: [],
  });
}
