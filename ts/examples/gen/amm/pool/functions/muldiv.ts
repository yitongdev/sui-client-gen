import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface MuldivArgs {
  a: bigint | TransactionArgument;
  b: bigint | TransactionArgument;
  c: bigint | TransactionArgument;
}

/**
 * Move function: `muldiv`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 *
 * @param tx - The transaction object
 * @param a - Function parameter
 * @param b - Function parameter
 * @param c - Function parameter
 */
export function muldiv(tx: Transaction, args: MuldivArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pool::muldiv`,
    arguments: [
      pure(tx, args.a, `u64`),
      pure(tx, args.b, `u64`),
      pure(tx, args.c, `u64`),
    ],
  });
}
