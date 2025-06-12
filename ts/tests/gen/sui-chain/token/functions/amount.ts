import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `amount`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param actionRequest - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function amount(
  tx: Transaction,
  typeArg: string,
  actionRequest: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::amount`,
    typeArguments: [typeArg],
    arguments: [obj(tx, actionRequest)],
  });
}
