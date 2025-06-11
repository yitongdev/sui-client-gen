import { Option } from "../../../_dependencies/source/0x1/option/structs/index.js";
import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
import { option, pure } from "../../../_framework/util.js";
import { Balance } from "../../balance/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface NewRequestArgs {
  name: string | TransactionArgument;
  amount: bigint | TransactionArgument;
  recipient: string | TransactionArgument | TransactionArgument | null;
  spentBalance: TransactionObjectInput | TransactionArgument | null;
}

/**
 * Move function: `new_request`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param name - Function parameter
 * @param amount - Function parameter
 * @param recipient - Function parameter
 * @param spentBalance - Function parameter
 * @param ctx - Function parameter
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
      pure(tx, args.name, `${String.$typeName}`),
      pure(tx, args.amount, `u64`),
      pure(tx, args.recipient, `${Option.$typeName}<address>`),
      option(tx, `${Balance.$typeName}<${typeArg}>`, args.spentBalance),
    ],
  });
}
