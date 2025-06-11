import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ListArgs {
  kiosk: TransactionObjectInput;
  kioskOwnerCap: TransactionObjectInput;
  id: string | TransactionArgument;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `list`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @param kioskOwnerCap - Function parameter
 * @param id - Function parameter
 * @param u64 - Function parameter
 */
export function list(
  tx: Transaction,
  typeArg: string,
  args: ListArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::list`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.kiosk),
      obj(tx, args.kioskOwnerCap),
      pure(tx, args.id, `${ID.$typeName}`),
      pure(tx, args.u64, `u64`),
    ],
  });
}
