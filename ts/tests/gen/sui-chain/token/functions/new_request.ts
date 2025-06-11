import { option, pure } from "../../../_framework/util.js";
import { Option } from "../../../move-stdlib-chain/option/structs/index.js";
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { Balance } from "../../balance/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface NewRequestArgs {
  string: string | TransactionArgument;
  u64: bigint | TransactionArgument;
  option1: string | TransactionArgument | null;
  option2: TransactionObjectInput | TransactionArgument | null;
}

/**
 * Move function: `new_request`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param string - Function parameter
 * @param u64 - Function parameter
 * @param option1 - Function parameter
 * @param option2 - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function newRequest(
  tx: Transaction,
  typeArg: string,
  args: NewRequestArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::new_request`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.string, `${String.$typeName}`),
      pure(tx, args.u64, `u64`),
      pure(tx, args.option1, `${Option.$typeName}<address>`),
      option(tx, `${Balance.$typeName}<${typeArg}>`, args.option2),
    ],
  });
}
