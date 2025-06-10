import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `id_address`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param obj - Function parameter
 */
export function idAddress(tx: Transaction, typeArg: string, obj: GenericArg) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::id_address`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, obj)],
  });
}
