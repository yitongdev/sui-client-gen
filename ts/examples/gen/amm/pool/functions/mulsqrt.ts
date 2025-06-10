import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface MulsqrtArgs {
  a: bigint | TransactionArgument;
  b: bigint | TransactionArgument;
}

/**
 * Move function: `mulsqrt`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 *
 * @param tx - The transaction object
 * @param a - Function parameter
 * @param b - Function parameter
 */
export function mulsqrt(tx: Transaction, args: MulsqrtArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pool::mulsqrt`,
    arguments: [pure(tx, args.a, `u64`), pure(tx, args.b, `u64`)],
  });
}
