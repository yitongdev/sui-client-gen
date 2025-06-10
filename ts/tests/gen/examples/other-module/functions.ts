import { PUBLISHED_AT } from "../constants.js";
import { Transaction } from "@mysten/sui/transactions";

export function new_(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::other_module::new`,
    arguments: [],
  });
}
