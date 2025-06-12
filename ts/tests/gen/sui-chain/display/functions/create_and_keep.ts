import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `create_and_keep`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param publisher - Function parameter
 * @param txContext - Function parameter
 */
export function createAndKeep(
  tx: Transaction,
  typeArg: string,
  publisher: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::display::create_and_keep`,
    typeArguments: [typeArg],
    arguments: [obj(tx, publisher)],
  });
}
