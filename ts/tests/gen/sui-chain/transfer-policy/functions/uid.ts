import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `uid`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param transferPolicy - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function uid(
  tx: Transaction,
  typeArg: string,
  transferPolicy: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::uid`,
    typeArguments: [typeArg],
    arguments: [obj(tx, transferPolicy)],
  });
}
