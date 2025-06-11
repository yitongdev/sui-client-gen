import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface RefreshReservePriceArgs {
  lendingMarket: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  clock: TransactionObjectInput;
  priceInfoObject: TransactionObjectInput;
}

/**
 * Move function: `refresh_reserve_price`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param lendingMarket - Function parameter
 * @param u64 - Function parameter
 * @param clock - Function parameter
 * @param priceInfoObject - Function parameter
 */
export function refreshReservePrice(
  tx: Transaction,
  typeArg: string,
  args: RefreshReservePriceArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::refresh_reserve_price`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.lendingMarket),
      pure(tx, args.u64, `u64`),
      obj(tx, args.clock),
      obj(tx, args.priceInfoObject),
    ],
  });
}
