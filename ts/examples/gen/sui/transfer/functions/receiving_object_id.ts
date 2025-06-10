import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `receiving_object_id`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param receiving - Function parameter
 */
export function receivingObjectId(
  tx: Transaction,
  typeArg: string,
  receiving: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer::receiving_object_id`,
    typeArguments: [typeArg],
    arguments: [obj(tx, receiving)],
  });
}
