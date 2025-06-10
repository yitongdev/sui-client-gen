import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `value`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param t - Function parameter
 */
export function value(
  tx: Transaction,
  typeArg: string,
  t: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::value`,
    typeArguments: [typeArg],
    arguments: [obj(tx, t)],
  });
}
