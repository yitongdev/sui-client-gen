import { GenericArg, generic, obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PlaceAndListArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
  item: GenericArg;
  price: bigint | TransactionArgument;
}

/**
 * Move function: `place_and_list`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 * @param item - Function parameter
 * @param price - Function parameter
 */
export function placeAndList(
  tx: Transaction,
  typeArg: string,
  args: PlaceAndListArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::place_and_list`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.self),
      obj(tx, args.cap),
      generic(tx, `${typeArg}`, args.item),
      pure(tx, args.price, `u64`),
    ],
  });
}
