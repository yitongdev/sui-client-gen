import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface UidMutAsOwnerArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
}

/**
 * Move function: `uid_mut_as_owner`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 */
export function uidMutAsOwner(
  tx: Transaction,
  typeArg: string,
  args: UidMutAsOwnerArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::uid_mut_as_owner`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), obj(tx, args.cap)],
  });
}
