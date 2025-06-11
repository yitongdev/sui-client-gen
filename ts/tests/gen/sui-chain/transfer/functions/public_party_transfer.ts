import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PublicPartyTransferArgs {
  t0: GenericArg;
  party: TransactionObjectInput;
}

/**
 * Move function: `public_party_transfer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param t0 - Function parameter
 * @param party - Function parameter
 */
export function publicPartyTransfer(
  tx: Transaction,
  typeArg: string,
  args: PublicPartyTransferArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer::public_party_transfer`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, args.t0), obj(tx, args.party)],
  });
}
