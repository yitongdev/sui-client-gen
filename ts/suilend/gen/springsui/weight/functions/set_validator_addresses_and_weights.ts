import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SetValidatorAddressesAndWeightsArgs {
  weightHook: TransactionObjectInput;
  weightHookAdminCap: TransactionObjectInput;
  vecMap: TransactionObjectInput;
}

/**
 * Move function: `set_validator_addresses_and_weights`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::weight`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param weightHook - Function parameter
 * @param weightHookAdminCap - Function parameter
 * @param vecMap - Function parameter
 */
export function setValidatorAddressesAndWeights(
  tx: Transaction,
  typeArg: string,
  args: SetValidatorAddressesAndWeightsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::weight::set_validator_addresses_and_weights`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.weightHook),
      obj(tx, args.weightHookAdminCap),
      obj(tx, args.vecMap),
    ],
  });
}
