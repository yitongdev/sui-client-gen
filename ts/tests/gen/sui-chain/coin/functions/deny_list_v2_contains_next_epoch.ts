import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface DenyListV2ContainsNextEpochArgs {
  denyList: TransactionObjectInput;
  address: string | TransactionArgument;
}

/**
 * Move function: `deny_list_v2_contains_next_epoch`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param denyList - Function parameter
 * @param address - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function denyListV2ContainsNextEpoch(
  tx: Transaction,
  typeArg: string,
  args: DenyListV2ContainsNextEpochArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::deny_list_v2_contains_next_epoch`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.denyList), pure(tx, args.address, `address`)],
  });
}
