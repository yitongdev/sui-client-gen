import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `scalar_zero`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 */
export function scalarZero(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::scalar_zero`,
    arguments: [],
  });
}
