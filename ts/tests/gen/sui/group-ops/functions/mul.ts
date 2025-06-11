import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface MulArgs {
  type: number | TransactionArgument;
  scalar: TransactionObjectInput;
  e: TransactionObjectInput;
}

/**
 * Move function: `mul`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @typeParam S - Type parameter 0
 * @typeParam G - Type parameter 1
 * @param tx - The transaction object
 * @param type - Function parameter
 * @param scalar - Function parameter
 * @param e - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function mul(
  tx: Transaction,
  typeArgs: [string, string],
  args: MulArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::mul`,
    typeArguments: typeArgs,
    arguments: [
      pure(tx, args.type, `u8`),
      obj(tx, args.scalar),
      obj(tx, args.e),
    ],
  });
}
