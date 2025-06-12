import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `init`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @param tx - The transaction object
 * @param lendingMarket - Function parameter
 * @param txContext - Function parameter
 */
export function init(tx: Transaction, lendingMarket: TransactionObjectInput): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::init`,
    arguments: [obj(tx, lendingMarket)],
  });
}
