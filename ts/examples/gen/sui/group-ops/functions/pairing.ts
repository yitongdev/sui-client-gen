import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface PairingArgs {
  type: number | TransactionArgument;
  e1: TransactionObjectInput;
  e2: TransactionObjectInput;
}

/**
 * Move function: `pairing`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @typeParam G1 - Type parameter 0
 * @typeParam G2 - Type parameter 1
 * @typeParam G3 - Type parameter 2
 * @param tx - The transaction object
 * @param type - Function parameter
 * @param e1 - Function parameter
 * @param e2 - Function parameter
 */
export function pairing(
  tx: Transaction,
  typeArgs: [string, string, string],
  args: PairingArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::pairing`,
    typeArguments: typeArgs,
    arguments: [pure(tx, args.type, `u8`), obj(tx, args.e1), obj(tx, args.e2)],
  });
}
