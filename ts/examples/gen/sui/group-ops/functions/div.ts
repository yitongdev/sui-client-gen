import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface DivArgs {
  type: number | TransactionArgument;
  scalar: TransactionObjectInput;
  e: TransactionObjectInput;
}

/**
 * Move function: `div`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @typeParam S - Type parameter 0
 * @typeParam G - Type parameter 1
 * @param tx - The transaction object
 * @param type - Function parameter
 * @param scalar - Function parameter
 * @param e - Function parameter
 */
export function div(
  tx: Transaction,
  typeArgs: [string, string],
  args: DivArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::div`,
    typeArguments: typeArgs,
    arguments: [
      pure(tx, args.type, `u8`),
      obj(tx, args.scalar),
      obj(tx, args.e),
    ],
  });
}
