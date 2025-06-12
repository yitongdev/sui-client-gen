import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `destroy`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::borrow`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param referent - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function destroy(
  tx: Transaction,
  typeArg: string,
  referent: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::borrow::destroy`,
    typeArguments: [typeArg],
    arguments: [obj(tx, referent)],
  });
}
