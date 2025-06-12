import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @typeParam G - Type parameter 0
 * @param tx - The transaction object
 * @param e - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function bytes(
  tx: Transaction,
  typeArg: string,
  e: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::bytes`,
    typeArguments: [typeArg],
    arguments: [obj(tx, e)],
  });
}
