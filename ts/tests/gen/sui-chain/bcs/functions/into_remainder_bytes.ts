import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `into_remainder_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bcs`
 *
 * @param tx - The transaction object
 * @param bcs - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function intoRemainderBytes(
  tx: Transaction,
  bcs: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bcs::into_remainder_bytes`,
    arguments: [obj(tx, bcs)],
  });
}
