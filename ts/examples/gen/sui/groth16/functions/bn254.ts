import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `bn254`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::groth16`
 *
 * @param tx - The transaction object
 */
export function bn254(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::groth16::bn254`,
    arguments: [],
  });
}
