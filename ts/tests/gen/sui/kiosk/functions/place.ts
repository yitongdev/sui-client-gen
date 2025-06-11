import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PlaceArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
  item: GenericArg;
}

/**
 * Move function: `place`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 * @param item - Function parameter
 */
export function place(
  tx: Transaction,
  typeArg: string,
  args: PlaceArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::place`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.self),
      obj(tx, args.cap),
      generic(tx, `${typeArg}`, args.item),
    ],
  });
}
