import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `supply_value`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::balance`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param supply - Function parameter
 */
export function supplyValue(
  tx: Transaction,
  typeArg: string,
  supply: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::balance::supply_value`,
    typeArguments: [typeArg],
    arguments: [obj(tx, supply)],
  });
}
