import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `public_freeze_object`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param obj - Function parameter
 */
export function publicFreezeObject(
  tx: Transaction,
  typeArg: string,
  obj: GenericArg,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer::public_freeze_object`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, obj)],
  });
}
