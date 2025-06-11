import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface IntMulArgs {
  u64: bigint | TransactionArgument;
  uq3232: TransactionObjectInput;
}

/**
 * Move function: `int_mul`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::uq32_32`
 *
 * @param tx - The transaction object
 * @param u64 - Function parameter
 * @param uq3232 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function intMul(tx: Transaction, args: IntMulArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::uq32_32::int_mul`,
    arguments: [pure(tx, args.u64, `u64`), obj(tx, args.uq3232)],
  });
}
