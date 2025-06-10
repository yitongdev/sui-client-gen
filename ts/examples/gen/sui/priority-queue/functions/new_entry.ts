import { GenericArg, generic, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface NewEntryArgs {
  priority: bigint | TransactionArgument;
  value: GenericArg;
}

/**
 * Move function: `new_entry`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::priority_queue`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param priority - Function parameter
 * @param value - Function parameter
 */
export function newEntry(tx: Transaction, typeArg: string, args: NewEntryArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::priority_queue::new_entry`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.priority, `u64`),
      generic(tx, `${typeArg}`, args.value),
    ],
  });
}
