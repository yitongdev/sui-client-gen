import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface V1RemoveArgs {
  denyList: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
  address: string | TransactionArgument;
}

/**
 * Move function: `v1_remove`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::deny_list`
 *
 * @param tx - The transaction object
 * @param denyList - Function parameter
 * @param u64 - Function parameter
 * @param vecU8 - Function parameter
 * @param address - Function parameter
 */
export function v1Remove(tx: Transaction, args: V1RemoveArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::deny_list::v1_remove`,
    arguments: [
      obj(tx, args.denyList),
      pure(tx, args.u64, `u64`),
      pure(tx, args.vecU8, `vector<u8>`),
      pure(tx, args.address, `address`),
    ],
  });
}
