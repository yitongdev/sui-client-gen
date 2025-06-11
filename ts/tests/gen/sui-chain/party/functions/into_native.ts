import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `into_native`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::party`
 *
 * @param tx - The transaction object
 * @param party - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function intoNative(
  tx: Transaction,
  party: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::party::into_native`,
    arguments: [obj(tx, party)],
  });
}
