import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `new`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::other_module`
 *
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function new_(tx: Transaction): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::other_module::new`,
    arguments: [],
  });
}
