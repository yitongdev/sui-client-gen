import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `create_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function createInternal(
  tx: Transaction,
  typeArg: string,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::display::create_internal`,
    typeArguments: [typeArg],
    arguments: [],
  });
}
