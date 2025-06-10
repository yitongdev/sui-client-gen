import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface AddArgs {
  denyList: TransactionObjectInput;
  perTypeIndex: bigint | TransactionArgument;
  type: Array<number | TransactionArgument> | TransactionArgument;
  addr: string | TransactionArgument;
}

/**
 * Move function: `add`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::deny_list`
 *
 * @param tx - The transaction object
 * @param denyList - Function parameter
 * @param perTypeIndex - Function parameter
 * @param type - Function parameter
 * @param addr - Function parameter
 */
export function add(tx: Transaction, args: AddArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::deny_list::add`,
    arguments: [
      obj(tx, args.denyList),
      pure(tx, args.perTypeIndex, `u64`),
      pure(tx, args.type, `vector<u8>`),
      pure(tx, args.addr, `address`),
    ],
  });
}
