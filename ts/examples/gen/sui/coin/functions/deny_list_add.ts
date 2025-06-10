import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface DenyListAddArgs {
  denyList: TransactionObjectInput;
  denyCap: TransactionObjectInput;
  addr: string | TransactionArgument;
}

/**
 * Move function: `deny_list_add`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param denyList - Function parameter
 * @param denyCap - Function parameter
 * @param addr - Function parameter
 * @param ctx - Function parameter
 */
export function denyListAdd(
  tx: Transaction,
  typeArg: string,
  args: DenyListAddArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::deny_list_add`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.denyList),
      obj(tx, args.denyCap),
      pure(tx, args.addr, `address`),
    ],
  });
}
