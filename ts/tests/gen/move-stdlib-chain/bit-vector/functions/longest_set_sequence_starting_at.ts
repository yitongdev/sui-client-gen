import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface LongestSetSequenceStartingAtArgs {
  bitVector: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `longest_set_sequence_starting_at`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::bit_vector`
 *
 * @param tx - The transaction object
 * @param bitVector - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function longestSetSequenceStartingAt(
  tx: Transaction,
  args: LongestSetSequenceStartingAtArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bit_vector::longest_set_sequence_starting_at`,
    arguments: [obj(tx, args.bitVector), pure(tx, args.u64, `u64`)],
  });
}
