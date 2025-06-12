import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface MultiplyU64Args {
  u64: bigint | TransactionArgument;
  fixedPoint32: TransactionObjectInput;
}

/**
 * Move function: `multiply_u64`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::fixed_point32`
 *
 * @param tx - The transaction object
 * @param u64 - Function parameter
 * @param fixedPoint32 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function multiplyU64(tx: Transaction, args: MultiplyU64Args): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fixed_point32::multiply_u64`,
    arguments: [pure(tx, args.u64, `u64`), obj(tx, args.fixedPoint32)],
  });
}
