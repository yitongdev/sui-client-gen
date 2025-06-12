import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface CeilMuldivArgs {
  a: bigint | TransactionArgument;
  b: bigint | TransactionArgument;
  c: bigint | TransactionArgument;
}

/**
 * Move function: `ceil_muldiv`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 *
 * @param tx - The transaction object
 * @param a - Function parameter
 * @param b - Function parameter
 * @param c - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function ceilMuldiv(tx: Transaction, args: CeilMuldivArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pool::ceil_muldiv`,
    arguments: [pure(tx, args.a, `u64`), pure(tx, args.b, `u64`), pure(tx, args.c, `u64`)],
  });
}
