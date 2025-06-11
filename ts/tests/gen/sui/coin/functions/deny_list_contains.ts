import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface DenyListContainsArgs {
  freezer: TransactionObjectInput;
  addr: string | TransactionArgument;
}

/**
 * Move function: `deny_list_contains`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param freezer - Function parameter
 * @param addr - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function denyListContains(
  tx: Transaction,
  typeArg: string,
  args: DenyListContainsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::deny_list_contains`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.freezer), pure(tx, args.addr, `address`)],
  });
}
