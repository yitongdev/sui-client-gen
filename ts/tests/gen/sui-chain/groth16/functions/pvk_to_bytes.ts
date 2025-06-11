import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `pvk_to_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::groth16`
 *
 * @param tx - The transaction object
 * @param preparedVerifyingKey - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function pvkToBytes(
  tx: Transaction,
  preparedVerifyingKey: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::groth16::pvk_to_bytes`,
    arguments: [obj(tx, preparedVerifyingKey)],
  });
}
