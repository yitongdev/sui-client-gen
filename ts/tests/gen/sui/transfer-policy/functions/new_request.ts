import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface NewRequestArgs {
  item: string | TransactionArgument;
  paid: bigint | TransactionArgument;
  from: string | TransactionArgument;
}

/**
 * Move function: `new_request`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param item - Function parameter
 * @param paid - Function parameter
 * @param from - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function newRequest(
  tx: Transaction,
  typeArg: string,
  args: NewRequestArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::new_request`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.item, `${ID.$typeName}`),
      pure(tx, args.paid, `u64`),
      pure(tx, args.from, `${ID.$typeName}`),
    ],
  });
}
