import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `into_balance`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param coin - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function intoBalance(
  tx: Transaction,
  typeArg: string,
  coin: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::into_balance`,
    typeArguments: [typeArg],
    arguments: [obj(tx, coin)],
  });
}
