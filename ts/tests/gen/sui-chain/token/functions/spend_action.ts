import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `spend_action`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function spendAction(tx: Transaction): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::spend_action`,
    arguments: [],
  });
}
