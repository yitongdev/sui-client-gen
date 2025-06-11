import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ChangeReservePriceFeedArgs {
  lendingMarketOwnerCap: TransactionObjectInput;
  lendingMarket: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  priceInfoObject: TransactionObjectInput;
  clock: TransactionObjectInput;
}

/**
 * Move function: `change_reserve_price_feed`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param lendingMarketOwnerCap - Function parameter
 * @param lendingMarket - Function parameter
 * @param u64 - Function parameter
 * @param priceInfoObject - Function parameter
 * @param clock - Function parameter
 */
export function changeReservePriceFeed(
  tx: Transaction,
  typeArgs: [string, string],
  args: ChangeReservePriceFeedArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::change_reserve_price_feed`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.lendingMarketOwnerCap),
      obj(tx, args.lendingMarket),
      pure(tx, args.u64, `u64`),
      obj(tx, args.priceInfoObject),
      obj(tx, args.clock),
    ],
  });
}
