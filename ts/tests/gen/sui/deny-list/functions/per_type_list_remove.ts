import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PerTypeListRemoveArgs {
  list: TransactionObjectInput;
  type: Array<number | TransactionArgument> | TransactionArgument;
  addr: string | TransactionArgument;
}

/**
 * Move function: `per_type_list_remove`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::deny_list`
 *
 * @param tx - The transaction object
 * @param list - Function parameter
 * @param type - Function parameter
 * @param addr - Function parameter
 */
export function perTypeListRemove(
  tx: Transaction,
  args: PerTypeListRemoveArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::deny_list::per_type_list_remove`,
    arguments: [
      obj(tx, args.list),
      pure(tx, args.type, `vector<u8>`),
      pure(tx, args.addr, `address`),
    ],
  });
}
