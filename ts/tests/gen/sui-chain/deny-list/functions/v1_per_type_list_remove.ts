import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface V1PerTypeListRemoveArgs {
  perTypeList: TransactionObjectInput;
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
  address: string | TransactionArgument;
}

/**
 * Move function: `v1_per_type_list_remove`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::deny_list`
 *
 * @param tx - The transaction object
 * @param perTypeList - Function parameter
 * @param vecU8 - Function parameter
 * @param address - Function parameter
 */
export function v1PerTypeListRemove(
  tx: Transaction,
  args: V1PerTypeListRemoveArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::deny_list::v1_per_type_list_remove`,
    arguments: [
      obj(tx, args.perTypeList),
      pure(tx, args.vecU8, `vector<u8>`),
      pure(tx, args.address, `address`),
    ],
  });
}
