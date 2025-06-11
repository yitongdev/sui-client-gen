import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddToRegistryArgs {
  registry: TransactionObjectInput;
  adminCap: TransactionObjectInput;
  liquidStakingInfo: TransactionObjectInput;
  t1: GenericArg;
}

/**
 * Move function: `add_to_registry`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::registry`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param registry - Function parameter
 * @param adminCap - Function parameter
 * @param liquidStakingInfo - Function parameter
 * @param t1 - Function parameter
 */
export function addToRegistry(
  tx: Transaction,
  typeArgs: [string, string],
  args: AddToRegistryArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::registry::add_to_registry`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.registry),
      obj(tx, args.adminCap),
      obj(tx, args.liquidStakingInfo),
      generic(tx, `${typeArgs[1]}`, args.t1),
    ],
  });
}
