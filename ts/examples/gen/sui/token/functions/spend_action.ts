import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `spend_action`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @param tx - The transaction object
 */
export function spendAction(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::spend_action`,
    arguments: [],
  });
}
