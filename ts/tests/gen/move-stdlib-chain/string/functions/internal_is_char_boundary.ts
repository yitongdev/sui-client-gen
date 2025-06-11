import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface InternalIsCharBoundaryArgs {
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `internal_is_char_boundary`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::string`
 *
 * @param tx - The transaction object
 * @param vecU8 - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function internalIsCharBoundary(
  tx: Transaction,
  args: InternalIsCharBoundaryArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::string::internal_is_char_boundary`,
    arguments: [pure(tx, args.vecU8, `vector<u8>`), pure(tx, args.u64, `u64`)],
  });
}
