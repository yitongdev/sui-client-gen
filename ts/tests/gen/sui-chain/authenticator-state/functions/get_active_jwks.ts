import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `get_active_jwks`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 *
 * @param tx - The transaction object
 * @param authenticatorState - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function getActiveJwks(
  tx: Transaction,
  authenticatorState: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::authenticator_state::get_active_jwks`,
    arguments: [obj(tx, authenticatorState)],
  });
}
