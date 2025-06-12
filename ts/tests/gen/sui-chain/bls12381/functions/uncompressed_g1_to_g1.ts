import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `uncompressed_g1_to_g1`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param element - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function uncompressedG1ToG1(
  tx: Transaction,
  element: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::uncompressed_g1_to_g1`,
    arguments: [obj(tx, element)],
  });
}
