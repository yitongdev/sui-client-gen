import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PerTypeListContainsArgs {
  list: TransactionObjectInput;
  type: Array<number | TransactionArgument> | TransactionArgument;
  addr: string | TransactionArgument;
}

/**
 * Move function: `per_type_list_contains`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::deny_list`
 *
 * @param tx - The transaction object
 * @param list - Function parameter
 * @param type - Function parameter
 * @param addr - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function perTypeListContains(
  tx: Transaction,
  args: PerTypeListContainsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::deny_list::per_type_list_contains`,
    arguments: [
      obj(tx, args.list),
      pure(tx, args.type, `vector<u8>`),
      pure(tx, args.addr, `address`),
    ],
  });
}
