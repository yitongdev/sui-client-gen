import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `from_module`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param publisher - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function fromModule(
  tx: Transaction,
  typeArg: string,
  publisher: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::from_module`,
    typeArguments: [typeArg],
    arguments: [obj(tx, publisher)],
  });
}
