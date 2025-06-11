import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface IntMulArgs {
  u128: bigint | TransactionArgument;
  uq6464: TransactionObjectInput;
}

/**
 * Move function: `int_mul`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::uq64_64`
 *
 * @param tx - The transaction object
 * @param u128 - Function parameter
 * @param uq6464 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function intMul(tx: Transaction, args: IntMulArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::uq64_64::int_mul`,
    arguments: [pure(tx, args.u128, `u128`), obj(tx, args.uq6464)],
  });
}
