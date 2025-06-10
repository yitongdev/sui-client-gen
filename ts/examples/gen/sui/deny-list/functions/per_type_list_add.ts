import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface PerTypeListAddArgs {
  list: TransactionObjectInput;
  type: Array<number | TransactionArgument> | TransactionArgument;
  addr: string | TransactionArgument;
}

/**
 * Move function: `per_type_list_add`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::deny_list`
 *
 * @param tx - The transaction object
 * @param list - Function parameter
 * @param type - Function parameter
 * @param addr - Function parameter
 */
export function perTypeListAdd(tx: Transaction, args: PerTypeListAddArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::deny_list::per_type_list_add`,
    arguments: [
      obj(tx, args.list),
      pure(tx, args.type, `vector<u8>`),
      pure(tx, args.addr, `address`),
    ],
  });
}
