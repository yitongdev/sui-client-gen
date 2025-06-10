import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `transfer_action`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @param tx - The transaction object
 */
export function transferAction(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::transfer_action`,
    arguments: [],
  });
}
