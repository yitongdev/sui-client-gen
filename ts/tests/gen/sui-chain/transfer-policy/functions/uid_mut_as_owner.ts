import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UidMutAsOwnerArgs {
  transferPolicy: TransactionObjectInput;
  transferPolicyCap: TransactionObjectInput;
}

/**
 * Move function: `uid_mut_as_owner`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param transferPolicy - Function parameter
 * @param transferPolicyCap - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function uidMutAsOwner(
  tx: Transaction,
  typeArg: string,
  args: UidMutAsOwnerArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::uid_mut_as_owner`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.transferPolicy), obj(tx, args.transferPolicyCap)],
  });
}
