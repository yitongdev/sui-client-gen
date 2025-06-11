import { GenericArg, generic, obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddArgs {
  ext: GenericArg;
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
  permissions: bigint | TransactionArgument;
}

/**
 * Move function: `add`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk_extension`
 *
 * @typeParam Ext - Type parameter 0
 * @param tx - The transaction object
 * @param ext - Function parameter
 * @param self - Function parameter
 * @param cap - Function parameter
 * @param permissions - Function parameter
 * @param ctx - Function parameter
 */
export function add(
  tx: Transaction,
  typeArg: string,
  args: AddArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk_extension::add`,
    typeArguments: [typeArg],
    arguments: [
      generic(tx, `${typeArg}`, args.ext),
      obj(tx, args.self),
      obj(tx, args.cap),
      pure(tx, args.permissions, `u128`),
    ],
  });
}
