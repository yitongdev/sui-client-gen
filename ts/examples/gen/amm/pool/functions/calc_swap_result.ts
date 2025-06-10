import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface CalcSwapResultArgs {
  iValue: bigint | TransactionArgument;
  iPoolValue: bigint | TransactionArgument;
  oPoolValue: bigint | TransactionArgument;
  poolLpValue: bigint | TransactionArgument;
  lpFeeBps: bigint | TransactionArgument;
  adminFeePct: bigint | TransactionArgument;
}

/**
 * Move function: `calc_swap_result`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 *
 * @param tx - The transaction object
 * @param iValue - Function parameter
 * @param iPoolValue - Function parameter
 * @param oPoolValue - Function parameter
 * @param poolLpValue - Function parameter
 * @param lpFeeBps - Function parameter
 * @param adminFeePct - Function parameter
 */
export function calcSwapResult(tx: Transaction, args: CalcSwapResultArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pool::calc_swap_result`,
    arguments: [
      pure(tx, args.iValue, `u64`),
      pure(tx, args.iPoolValue, `u64`),
      pure(tx, args.oPoolValue, `u64`),
      pure(tx, args.poolLpValue, `u64`),
      pure(tx, args.lpFeeBps, `u64`),
      pure(tx, args.adminFeePct, `u64`),
    ],
  });
}
