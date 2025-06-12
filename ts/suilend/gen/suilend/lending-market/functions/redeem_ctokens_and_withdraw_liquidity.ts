import { obj, option, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { RateLimiterExemption } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface RedeemCtokensAndWithdrawLiquidityArgs {
  lendingMarket: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  clock: TransactionObjectInput;
  coin: TransactionObjectInput;
  option: TransactionObjectInput | TransactionArgument | null;
}

/**
 * Move function: `redeem_ctokens_and_withdraw_liquidity`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param lendingMarket - Function parameter
 * @param u64 - Function parameter
 * @param clock - Function parameter
 * @param coin - Function parameter
 * @param option - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function redeemCtokensAndWithdrawLiquidity(
  tx: Transaction,
  typeArgs: [string, string],
  args: RedeemCtokensAndWithdrawLiquidityArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::redeem_ctokens_and_withdraw_liquidity`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.lendingMarket),
      pure(tx, args.u64, `u64`),
      obj(tx, args.clock),
      obj(tx, args.coin),
      option(tx, `${RateLimiterExemption.$typeName}<${typeArgs[0]}, ${typeArgs[1]}>`, args.option),
    ],
  });
}
