import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `transfer_action`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function transferAction(tx: Transaction): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::transfer_action`,
    arguments: [],
  });
}
