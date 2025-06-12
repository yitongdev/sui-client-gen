import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `default`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param txContext - Function parameter
 */
export function default_(tx: Transaction): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::kiosk::default`, arguments: [] });
}
