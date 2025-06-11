import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PlaceInternalArgs {
  kiosk: TransactionObjectInput;
  t0: GenericArg;
}

/**
 * Move function: `place_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @param t0 - Function parameter
 */
export function placeInternal(
  tx: Transaction,
  typeArg: string,
  args: PlaceInternalArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::place_internal`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.kiosk), generic(tx, `${typeArg}`, args.t0)],
  });
}
