import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `create`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 *
 * @param tx - The transaction object
 * @param ctx - Function parameter
 */
export function create(tx: Transaction): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::authenticator_state::create`, arguments: [] });
}
