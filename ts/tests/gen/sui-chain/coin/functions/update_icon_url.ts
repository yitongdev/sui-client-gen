import { obj, pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib-chain/ascii/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UpdateIconUrlArgs {
  treasuryCap: TransactionObjectInput;
  coinMetadata: TransactionObjectInput;
  string: string | TransactionArgument;
}

/**
 * Move function: `update_icon_url`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param treasuryCap - Function parameter
 * @param coinMetadata - Function parameter
 * @param string - Function parameter
 */
export function updateIconUrl(
  tx: Transaction,
  typeArg: string,
  args: UpdateIconUrlArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::update_icon_url`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.treasuryCap),
      obj(tx, args.coinMetadata),
      pure(tx, args.string, `${String.$typeName}`),
    ],
  });
}
