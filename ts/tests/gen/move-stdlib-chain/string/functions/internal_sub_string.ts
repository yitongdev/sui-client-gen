import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface InternalSubStringArgs {
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
}

/**
 * Move function: `internal_sub_string`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::string`
 *
 * @param tx - The transaction object
 * @param vecU8 - Function parameter
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function internalSubString(tx: Transaction, args: InternalSubStringArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::string::internal_sub_string`,
    arguments: [
      pure(tx, args.vecU8, `vector<u8>`),
      pure(tx, args.u641, `u64`),
      pure(tx, args.u642, `u64`),
    ],
  });
}
