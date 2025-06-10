import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `sui_system_state`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 * @param ctx - Function parameter
 */
export function suiSystemState(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::sui_system_state`,
    arguments: [],
  });
}
