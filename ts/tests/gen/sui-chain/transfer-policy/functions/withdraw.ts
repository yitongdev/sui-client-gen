import { obj, pure } from "../../../_framework/util.js";
import { Option } from "../../../move-stdlib-chain/option/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface WithdrawArgs {
  transferPolicy: TransactionObjectInput;
  transferPolicyCap: TransactionObjectInput;
  option: bigint | TransactionArgument | null;
}

/**
 * Move function: `withdraw`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param transferPolicy - Function parameter
 * @param transferPolicyCap - Function parameter
 * @param option - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function withdraw(tx: Transaction, typeArg: string, args: WithdrawArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::withdraw`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.transferPolicy),
      obj(tx, args.transferPolicyCap),
      pure(tx, args.option, `${Option.$typeName}<u64>`),
    ],
  });
}
