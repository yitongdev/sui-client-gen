import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `pvk_to_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::groth16`
 *
 * @param tx - The transaction object
 * @param pvk - Function parameter
 */
export function pvkToBytes(tx: Transaction, pvk: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::groth16::pvk_to_bytes`,
    arguments: [obj(tx, pvk)],
  });
}
