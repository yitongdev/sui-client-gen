import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `create_supply`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::balance`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param t - Function parameter
 */
export function createSupply(tx: Transaction, typeArg: string, t: GenericArg) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::balance::create_supply`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, t)],
  });
}
