import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `new_generator`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param r - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function newGenerator(
  tx: Transaction,
  r: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::new_generator`,
    arguments: [obj(tx, r)],
  });
}
