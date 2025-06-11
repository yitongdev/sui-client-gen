import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddReserveArgs {
  lendingMarketOwnerCap: TransactionObjectInput;
  lendingMarket: TransactionObjectInput;
  priceInfoObject: TransactionObjectInput;
  reserveConfig: TransactionObjectInput;
  coinMetadata: TransactionObjectInput;
  clock: TransactionObjectInput;
}

/**
 * Move function: `add_reserve`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param lendingMarketOwnerCap - Function parameter
 * @param lendingMarket - Function parameter
 * @param priceInfoObject - Function parameter
 * @param reserveConfig - Function parameter
 * @param coinMetadata - Function parameter
 * @param clock - Function parameter
 * @param txContext - Function parameter
 */
export function addReserve(
  tx: Transaction,
  typeArgs: [string, string],
  args: AddReserveArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::add_reserve`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.lendingMarketOwnerCap),
      obj(tx, args.lendingMarket),
      obj(tx, args.priceInfoObject),
      obj(tx, args.reserveConfig),
      obj(tx, args.coinMetadata),
      obj(tx, args.clock),
    ],
  });
}
