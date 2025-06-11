import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `borrow`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::borrow`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function borrow(
  tx: Transaction,
  typeArg: string,
  self: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::borrow::borrow`,
    typeArguments: [typeArg],
    arguments: [obj(tx, self)],
  });
}
