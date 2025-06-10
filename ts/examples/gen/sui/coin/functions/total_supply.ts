import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `total_supply`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param cap - Function parameter
 */
export function totalSupply(
  tx: Transaction,
  typeArg: string,
  cap: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::total_supply`,
    typeArguments: [typeArg],
    arguments: [obj(tx, cap)],
  });
}
