import { GenericArg, generic, obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PlaceAndListArgs {
  kiosk: TransactionObjectInput;
  kioskOwnerCap: TransactionObjectInput;
  t0: GenericArg;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `place_and_list`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @param kioskOwnerCap - Function parameter
 * @param t0 - Function parameter
 * @param u64 - Function parameter
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
      obj(tx, args.kiosk),
      obj(tx, args.kioskOwnerCap),
      generic(tx, `${typeArg}`, args.t0),
      pure(tx, args.u64, `u64`),
    ],
  });
}
