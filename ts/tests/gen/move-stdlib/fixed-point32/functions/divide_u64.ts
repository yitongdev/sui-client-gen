import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface DivideU64Args {
  val: bigint | TransactionArgument;
  divisor: TransactionObjectInput;
}

/**
 * Move function: `divide_u64`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::fixed_point32`
 *
 * @param tx - The transaction object
 * @param val - Function parameter
 * @param divisor - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function divideU64(
  tx: Transaction,
  args: DivideU64Args,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fixed_point32::divide_u64`,
    arguments: [pure(tx, args.val, `u64`), obj(tx, args.divisor)],
  });
}
