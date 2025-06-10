import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `get_description`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param metadata - Function parameter
 */
export function getDescription(
  tx: Transaction,
  typeArg: string,
  metadata: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::get_description`,
    typeArguments: [typeArg],
    arguments: [obj(tx, metadata)],
  });
}
