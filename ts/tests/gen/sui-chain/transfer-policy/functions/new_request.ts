import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface NewRequestArgs {
  id1: string | TransactionArgument;
  u64: bigint | TransactionArgument;
  id2: string | TransactionArgument;
}

/**
 * Move function: `new_request`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param id1 - Function parameter
 * @param u64 - Function parameter
 * @param id2 - Function parameter
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
      pure(tx, args.id1, `${ID.$typeName}`),
      pure(tx, args.u64, `u64`),
      pure(tx, args.id2, `${ID.$typeName}`),
    ],
  });
}
