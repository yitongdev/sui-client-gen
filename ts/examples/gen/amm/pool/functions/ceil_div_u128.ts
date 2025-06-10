import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface CeilDivU128Args {
  a: bigint | TransactionArgument;
  b: bigint | TransactionArgument;
}

/**
 * Move function: `ceil_div_u128`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 *
 * @param tx - The transaction object
 * @param a - Function parameter
 * @param b - Function parameter
 */
export function ceilDivU128(tx: Transaction, args: CeilDivU128Args) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pool::ceil_div_u128`,
    arguments: [pure(tx, args.a, `u128`), pure(tx, args.b, `u128`)],
  });
}
