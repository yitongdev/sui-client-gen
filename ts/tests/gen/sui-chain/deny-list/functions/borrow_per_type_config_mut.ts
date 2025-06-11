import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface BorrowPerTypeConfigMutArgs {
  denyList: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `borrow_per_type_config_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::deny_list`
 *
 * @param tx - The transaction object
 * @param denyList - Function parameter
 * @param u64 - Function parameter
 * @param vecU8 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function borrowPerTypeConfigMut(
  tx: Transaction,
  args: BorrowPerTypeConfigMutArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::deny_list::borrow_per_type_config_mut`,
    arguments: [
      obj(tx, args.denyList),
      pure(tx, args.u64, `u64`),
      pure(tx, args.vecU8, `vector<u8>`),
    ],
  });
}
