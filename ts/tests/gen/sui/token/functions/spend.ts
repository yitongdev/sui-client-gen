import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `spend`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param t - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function spend(
  tx: Transaction,
  typeArg: string,
  t: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::spend`,
    typeArguments: [typeArg],
    arguments: [obj(tx, t)],
  });
}
