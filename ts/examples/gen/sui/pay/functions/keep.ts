import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `keep`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::pay`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param c - Function parameter
 * @param ctx - Function parameter
 */
export function keep(
  tx: Transaction,
  typeArg: string,
  c: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pay::keep`,
    typeArguments: [typeArg],
    arguments: [obj(tx, c)],
  });
}
