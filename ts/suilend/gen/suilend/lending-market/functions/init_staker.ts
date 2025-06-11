import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface InitStakerArgs {
  lendingMarket: TransactionObjectInput;
  lendingMarketOwnerCap: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  treasuryCap: TransactionObjectInput;
}

/**
 * Move function: `init_staker`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param lendingMarket - Function parameter
 * @param lendingMarketOwnerCap - Function parameter
 * @param u64 - Function parameter
 * @param treasuryCap - Function parameter
 * @param txContext - Function parameter
 */
export function initStaker(
  tx: Transaction,
  typeArgs: [string, string],
  args: InitStakerArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::init_staker`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.lendingMarket),
      obj(tx, args.lendingMarketOwnerCap),
      pure(tx, args.u64, `u64`),
      obj(tx, args.treasuryCap),
    ],
  });
}
