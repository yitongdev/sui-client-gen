import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface IncreaseSupplyArgs {
  self: TransactionObjectInput;
  value: bigint | TransactionArgument;
}

/**
 * Move function: `increase_supply`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::balance`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param value - Function parameter
 */
export function increaseSupply(
  tx: Transaction,
  typeArg: string,
  args: IncreaseSupplyArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::balance::increase_supply`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), pure(tx, args.value, `u64`)],
  });
}
