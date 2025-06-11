import { obj, option, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ExistStaleOracles } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface WithdrawArgs {
  obligation: TransactionObjectInput;
  reserve: TransactionObjectInput;
  clock: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  option: TransactionObjectInput | TransactionArgument | null;
}

/**
 * Move function: `withdraw`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param obligation - Function parameter
 * @param reserve - Function parameter
 * @param clock - Function parameter
 * @param u64 - Function parameter
 * @param option - Function parameter
 */
export function withdraw(
  tx: Transaction,
  typeArg: string,
  args: WithdrawArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::obligation::withdraw`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.obligation),
      obj(tx, args.reserve),
      obj(tx, args.clock),
      pure(tx, args.u64, `u64`),
      option(tx, `${ExistStaleOracles.$typeName}`, args.option),
    ],
  });
}
