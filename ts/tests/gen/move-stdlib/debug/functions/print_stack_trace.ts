import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `print_stack_trace`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::debug`
 *
 * @param tx - The transaction object
 */
export function printStackTrace(tx: Transaction): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::debug::print_stack_trace`, arguments: [] });
}
