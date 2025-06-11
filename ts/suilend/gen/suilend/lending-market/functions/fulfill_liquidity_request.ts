import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface FulfillLiquidityRequestArgs {
  lendingMarket: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  liquidityRequest: TransactionObjectInput;
}

/**
 * Move function: `fulfill_liquidity_request`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param lendingMarket - Function parameter
 * @param u64 - Function parameter
 * @param liquidityRequest - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function fulfillLiquidityRequest(
  tx: Transaction,
  typeArgs: [string, string],
  args: FulfillLiquidityRequestArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::fulfill_liquidity_request`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.lendingMarket),
      pure(tx, args.u64, `u64`),
      obj(tx, args.liquidityRequest),
    ],
  });
}
