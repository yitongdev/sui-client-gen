import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PlaceInternalArgs {
  self: TransactionObjectInput;
  item: GenericArg;
}

/**
 * Move function: `place_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param item - Function parameter
 */
export function placeInternal(
  tx: Transaction,
  typeArg: string,
  args: PlaceInternalArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::place_internal`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), generic(tx, `${typeArg}`, args.item)],
  });
}
