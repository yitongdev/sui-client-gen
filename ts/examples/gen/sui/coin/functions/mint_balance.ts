import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface MintBalanceArgs {
  cap: TransactionObjectInput;
  value: bigint | TransactionArgument;
}

/**
 * Move function: `mint_balance`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param cap - Function parameter
 * @param value - Function parameter
 */
export function mintBalance(
  tx: Transaction,
  typeArg: string,
  args: MintBalanceArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::mint_balance`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.cap), pure(tx, args.value, `u64`)],
  });
}
