import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `to_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bcs`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param value - Function parameter
 */
export function toBytes(tx: Transaction, typeArg: string, value: GenericArg) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bcs::to_bytes`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, value)],
  });
}
