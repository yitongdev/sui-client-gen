import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `init`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market_registry`
 *
 * @param tx - The transaction object
 * @param txContext - Function parameter
 */
export function init(tx: Transaction): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::lending_market_registry::init`, arguments: [] });
}
