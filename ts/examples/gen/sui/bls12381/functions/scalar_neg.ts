import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `scalar_neg`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param e - Function parameter
 */
export function scalarNeg(tx: Transaction, e: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::scalar_neg`,
    arguments: [obj(tx, e)],
  });
}
