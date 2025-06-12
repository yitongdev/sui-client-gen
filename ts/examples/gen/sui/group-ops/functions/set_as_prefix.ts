import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface SetAsPrefixArgs {
  x: bigint | TransactionArgument;
  bigEndian: boolean | TransactionArgument;
  buffer: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `set_as_prefix`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @param tx - The transaction object
 * @param x - Function parameter
 * @param bigEndian - Function parameter
 * @param buffer - Function parameter
 */
export function setAsPrefix(tx: Transaction, args: SetAsPrefixArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::set_as_prefix`,
    arguments: [
      pure(tx, args.x, `u64`),
      pure(tx, args.bigEndian, `bool`),
      pure(tx, args.buffer, `vector<u8>`),
    ],
  });
}
