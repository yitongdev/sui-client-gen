import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SetAsPrefixArgs {
  u64: bigint | TransactionArgument;
  bool: boolean | TransactionArgument;
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `set_as_prefix`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @param tx - The transaction object
 * @param u64 - Function parameter
 * @param bool - Function parameter
 * @param vecU8 - Function parameter
 */
export function setAsPrefix(
  tx: Transaction,
  args: SetAsPrefixArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::set_as_prefix`,
    arguments: [
      pure(tx, args.u64, `u64`),
      pure(tx, args.bool, `bool`),
      pure(tx, args.vecU8, `vector<u8>`),
    ],
  });
}
