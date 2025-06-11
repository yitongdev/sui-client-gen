import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `reserves`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param lendingMarket - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function reserves(
  tx: Transaction,
  typeArg: string,
  lendingMarket: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::reserves`,
    typeArguments: [typeArg],
    arguments: [obj(tx, lendingMarket)],
  });
}
