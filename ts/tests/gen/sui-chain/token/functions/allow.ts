import { obj, pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AllowArgs {
  tokenPolicy: TransactionObjectInput;
  tokenPolicyCap: TransactionObjectInput;
  string: string | TransactionArgument;
}

/**
 * Move function: `allow`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param tokenPolicy - Function parameter
 * @param tokenPolicyCap - Function parameter
 * @param string - Function parameter
 * @param txContext - Function parameter
 */
export function allow(tx: Transaction, typeArg: string, args: AllowArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::allow`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.tokenPolicy),
      obj(tx, args.tokenPolicyCap),
      pure(tx, args.string, `${String.$typeName}`),
    ],
  });
}
