import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `claim`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @typeParam OTW - Type parameter 0
 * @param tx - The transaction object
 * @param otw - Function parameter
 * @param ctx - Function parameter
 */
export function claim(tx: Transaction, typeArg: string, otw: GenericArg) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::claim`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, otw)],
  });
}
