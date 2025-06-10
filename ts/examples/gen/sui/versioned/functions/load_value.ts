import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `load_value`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::versioned`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 */
export function loadValue(
  tx: Transaction,
  typeArg: string,
  self: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::versioned::load_value`,
    typeArguments: [typeArg],
    arguments: [obj(tx, self)],
  });
}
