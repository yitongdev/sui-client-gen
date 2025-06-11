import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UpdatePriceArgs {
  reserve: TransactionObjectInput;
  clock: TransactionObjectInput;
  priceInfoObject: TransactionObjectInput;
}

/**
 * Move function: `update_price`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param reserve - Function parameter
 * @param clock - Function parameter
 * @param priceInfoObject - Function parameter
 */
export function updatePrice(
  tx: Transaction,
  typeArg: string,
  args: UpdatePriceArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve::update_price`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.reserve),
      obj(tx, args.clock),
      obj(tx, args.priceInfoObject),
    ],
  });
}
