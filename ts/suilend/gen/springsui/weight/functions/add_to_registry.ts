import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddToRegistryArgs {
  weightHook: TransactionObjectInput;
  registry: TransactionObjectInput;
  liquidStakingInfo: TransactionObjectInput;
}

/**
 * Move function: `add_to_registry`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::weight`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param weightHook - Function parameter
 * @param registry - Function parameter
 * @param liquidStakingInfo - Function parameter
 */
export function addToRegistry(
  tx: Transaction,
  typeArg: string,
  args: AddToRegistryArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::weight::add_to_registry`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.weightHook),
      obj(tx, args.registry),
      obj(tx, args.liquidStakingInfo),
    ],
  });
}
