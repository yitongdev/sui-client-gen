import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `version`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param d - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function version(
  tx: Transaction,
  typeArg: string,
  d: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::display::version`,
    typeArguments: [typeArg],
    arguments: [obj(tx, d)],
  });
}
