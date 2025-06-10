import { vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Entry } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

/**
 * Move function: `new`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::priority_queue`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param entries - Function parameter
 */
export function new_(
  tx: Transaction,
  typeArg: string,
  entries: Array<TransactionObjectInput> | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::priority_queue::new`,
    typeArguments: [typeArg],
    arguments: [vector(tx, `${Entry.$typeName}<${typeArg}>`, entries)],
  });
}
