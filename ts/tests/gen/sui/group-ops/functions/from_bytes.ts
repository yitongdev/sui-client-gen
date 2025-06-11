import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface FromBytesArgs {
  type: number | TransactionArgument;
  bytes: Array<number | TransactionArgument> | TransactionArgument;
  isTrusted: boolean | TransactionArgument;
}

/**
 * Move function: `from_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @typeParam G - Type parameter 0
 * @param tx - The transaction object
 * @param type - Function parameter
 * @param bytes - Function parameter
 * @param isTrusted - Function parameter
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
      pure(tx, args.type, `u8`),
      pure(tx, args.bytes, `vector<u8>`),
      pure(tx, args.isTrusted, `bool`),
    ],
  });
}
