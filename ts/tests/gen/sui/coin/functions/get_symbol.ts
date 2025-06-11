import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `get_symbol`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param metadata - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function getSymbol(
  tx: Transaction,
  typeArg: string,
  metadata: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::get_symbol`,
    typeArguments: [typeArg],
    arguments: [obj(tx, metadata)],
  });
}
