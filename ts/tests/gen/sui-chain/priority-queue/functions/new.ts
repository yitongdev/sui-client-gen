import { vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Entry } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `new`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::priority_queue`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param vecEntry - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function new_(
  tx: Transaction,
  typeArg: string,
  vecEntry: Array<TransactionObjectInput> | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::priority_queue::new`,
    typeArguments: [typeArg],
    arguments: [vector(tx, `${Entry.$typeName}<${typeArg}>`, vecEntry)],
  });
}
