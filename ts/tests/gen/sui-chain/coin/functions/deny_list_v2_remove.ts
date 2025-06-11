import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface DenyListV2RemoveArgs {
  denyList: TransactionObjectInput;
  denyCapV2: TransactionObjectInput;
  address: string | TransactionArgument;
}

/**
 * Move function: `deny_list_v2_remove`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param denyList - Function parameter
 * @param denyCapV2 - Function parameter
 * @param address - Function parameter
 * @param txContext - Function parameter
 */
export function denyListV2Remove(
  tx: Transaction,
  typeArg: string,
  args: DenyListV2RemoveArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::deny_list_v2_remove`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.denyList),
      obj(tx, args.denyCapV2),
      pure(tx, args.address, `address`),
    ],
  });
}
