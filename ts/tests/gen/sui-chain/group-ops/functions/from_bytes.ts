import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface FromBytesArgs {
  u8: number | TransactionArgument;
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
  bool: boolean | TransactionArgument;
}

/**
 * Move function: `from_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param u8 - Function parameter
 * @param vecU8 - Function parameter
 * @param bool - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function fromBytes(
  tx: Transaction,
  typeArg: string,
  args: FromBytesArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::from_bytes`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.u8, `u8`),
      pure(tx, args.vecU8, `vector<u8>`),
      pure(tx, args.bool, `bool`),
    ],
  });
}
