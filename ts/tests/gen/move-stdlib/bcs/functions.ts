import { GenericArg, generic } from "../../_framework/util.js";
import { PUBLISHED_AT } from "../index.js";
import { Transaction } from "@mysten/sui/transactions";

export function toBytes(tx: Transaction, typeArg: string, v: GenericArg) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bcs::to_bytes`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, v)],
  });
}
