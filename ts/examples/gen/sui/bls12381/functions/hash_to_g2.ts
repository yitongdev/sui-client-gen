import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `hash_to_g2`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param m - Function parameter
 */
export function hashToG2(
  tx: Transaction,
  m: Array<number | TransactionArgument> | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::hash_to_g2`,
    arguments: [pure(tx, m, `vector<u8>`)],
  });
}
