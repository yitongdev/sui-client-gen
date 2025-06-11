import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `derive_next_block`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param randomGenerator - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function deriveNextBlock(
  tx: Transaction,
  randomGenerator: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::derive_next_block`,
    arguments: [obj(tx, randomGenerator)],
  });
}
