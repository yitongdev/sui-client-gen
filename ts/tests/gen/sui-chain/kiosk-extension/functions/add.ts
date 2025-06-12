import { GenericArg, generic, obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddArgs {
  t0: GenericArg;
  kiosk: TransactionObjectInput;
  kioskOwnerCap: TransactionObjectInput;
  u128: bigint | TransactionArgument;
}

/**
 * Move function: `add`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk_extension`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param t0 - Function parameter
 * @param kiosk - Function parameter
 * @param kioskOwnerCap - Function parameter
 * @param u128 - Function parameter
 * @param txContext - Function parameter
 */
export function add(tx: Transaction, typeArg: string, args: AddArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk_extension::add`,
    typeArguments: [typeArg],
    arguments: [
      generic(tx, `${typeArg}`, args.t0),
      obj(tx, args.kiosk),
      obj(tx, args.kioskOwnerCap),
      pure(tx, args.u128, `u128`),
    ],
  });
}
