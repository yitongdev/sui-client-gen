import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface IntDivArgs {
  u64: bigint | TransactionArgument;
  uq3232: TransactionObjectInput;
}

/**
 * Move function: `int_div`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::uq32_32`
 *
 * @param tx - The transaction object
 * @param u64 - Function parameter
 * @param uq3232 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function intDiv(tx: Transaction, args: IntDivArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::uq32_32::int_div`,
    arguments: [pure(tx, args.u64, `u64`), obj(tx, args.uq3232)],
  });
}
