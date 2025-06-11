import { pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface StringBytesLtArgs {
  string1: string | TransactionArgument;
  string2: string | TransactionArgument;
}

/**
 * Move function: `string_bytes_lt`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 *
 * @param tx - The transaction object
 * @param string1 - Function parameter
 * @param string2 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function stringBytesLt(
  tx: Transaction,
  args: StringBytesLtArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::authenticator_state::string_bytes_lt`,
    arguments: [
      pure(tx, args.string1, `${String.$typeName}`),
      pure(tx, args.string2, `${String.$typeName}`),
    ],
  });
}
