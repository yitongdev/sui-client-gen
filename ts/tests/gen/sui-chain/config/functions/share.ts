import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `share`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::config`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param config - Function parameter
 */
export function share(
  tx: Transaction,
  typeArg: string,
  config: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::config::share`,
    typeArguments: [typeArg],
    arguments: [obj(tx, config)],
  });
}
