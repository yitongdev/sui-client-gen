import { obj, pure } from "../../../_framework/util.js";
import { Option } from "../../../move-stdlib/option/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface WithdrawArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
  amount: bigint | TransactionArgument | TransactionArgument | null;
}

/**
 * Move function: `withdraw`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 * @param amount - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function withdraw(
  tx: Transaction,
  args: WithdrawArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::withdraw`,
    arguments: [
      obj(tx, args.self),
      obj(tx, args.cap),
      pure(tx, args.amount, `${Option.$typeName}<u64>`),
    ],
  });
}
