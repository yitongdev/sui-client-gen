import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `create_lending_market`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market_registry`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param registry - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function createLendingMarket(
  tx: Transaction,
  typeArg: string,
  registry: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market_registry::create_lending_market`,
    typeArguments: [typeArg],
    arguments: [obj(tx, registry)],
  });
}
