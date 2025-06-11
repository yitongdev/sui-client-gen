import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface HasChildObjectWithTyArgs {
  address1: string | TransactionArgument;
  address2: string | TransactionArgument;
}

/**
 * Move function: `has_child_object_with_ty`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::dynamic_field`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param address1 - Function parameter
 * @param address2 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function hasChildObjectWithTy(
  tx: Transaction,
  typeArg: string,
  args: HasChildObjectWithTyArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::dynamic_field::has_child_object_with_ty`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.address1, `address`),
      pure(tx, args.address2, `address`),
    ],
  });
}
