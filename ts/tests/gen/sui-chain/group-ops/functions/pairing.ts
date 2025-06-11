import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PairingArgs {
  u8: number | TransactionArgument;
  element1: TransactionObjectInput;
  element2: TransactionObjectInput;
}

/**
 * Move function: `pairing`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @typeParam T2 - Type parameter 2
 * @param tx - The transaction object
 * @param u8 - Function parameter
 * @param element1 - Function parameter
 * @param element2 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function pairing(
  tx: Transaction,
  typeArgs: [string, string, string],
  args: PairingArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::pairing`,
    typeArguments: typeArgs,
    arguments: [
      pure(tx, args.u8, `u8`),
      obj(tx, args.element1),
      obj(tx, args.element2),
    ],
  });
}
