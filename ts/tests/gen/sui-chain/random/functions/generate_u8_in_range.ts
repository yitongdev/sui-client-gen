import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface GenerateU8InRangeArgs {
  randomGenerator: TransactionObjectInput;
  u81: number | TransactionArgument;
  u82: number | TransactionArgument;
}

/**
 * Move function: `generate_u8_in_range`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param randomGenerator - Function parameter
 * @param u81 - Function parameter
 * @param u82 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function generateU8InRange(tx: Transaction, args: GenerateU8InRangeArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::generate_u8_in_range`,
    arguments: [obj(tx, args.randomGenerator), pure(tx, args.u81, `u8`), pure(tx, args.u82, `u8`)],
  });
}
