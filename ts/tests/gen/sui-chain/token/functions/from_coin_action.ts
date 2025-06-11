import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `from_coin_action`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function fromCoinAction(tx: Transaction): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::from_coin_action`,
    arguments: [],
  });
}
