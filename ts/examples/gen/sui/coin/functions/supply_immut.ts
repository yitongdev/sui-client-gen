import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `supply_immut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param treasury - Function parameter
 */
export function supplyImmut(
  tx: Transaction,
  typeArg: string,
  treasury: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::supply_immut`,
    typeArguments: [typeArg],
    arguments: [obj(tx, treasury)],
  });
}
