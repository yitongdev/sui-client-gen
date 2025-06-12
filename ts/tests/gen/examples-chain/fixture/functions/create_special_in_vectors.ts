import { GenericArg, pure, vector } from "../../../_framework/util.js";
import { String as String1 } from "../../../move-stdlib-chain/ascii/structs/index.js";
import { Option } from "../../../move-stdlib-chain/option/structs/index.js";
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { ID } from "../../../sui-chain/object/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Bar } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CreateSpecialInVectorsArgs {
  vecString1: Array<string | TransactionArgument> | TransactionArgument;
  vecString2: Array<string | TransactionArgument> | TransactionArgument;
  vecId: Array<string | TransactionArgument> | TransactionArgument;
  vecBar: Array<TransactionObjectInput> | TransactionArgument;
  vecOption1: Array<bigint | TransactionArgument | null> | TransactionArgument;
  vecOption2: Array<GenericArg | TransactionArgument | null> | TransactionArgument;
}

/**
 * Move function: `create_special_in_vectors`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param vecString1 - Function parameter
 * @param vecString2 - Function parameter
 * @param vecId - Function parameter
 * @param vecBar - Function parameter
 * @param vecOption1 - Function parameter
 * @param vecOption2 - Function parameter
 * @param txContext - Function parameter
 */
export function createSpecialInVectors(
  tx: Transaction,
  typeArg: string,
  args: CreateSpecialInVectorsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fixture::create_special_in_vectors`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.vecString1, `vector<${String.$typeName}>`),
      pure(tx, args.vecString2, `vector<${String1.$typeName}>`),
      pure(tx, args.vecId, `vector<${ID.$typeName}>`),
      vector(tx, `${Bar.$typeName}`, args.vecBar),
      pure(tx, args.vecOption1, `vector<${Option.$typeName}<u64>>`),
      vector(tx, `${Option.$typeName}<${typeArg}>`, args.vecOption2),
    ],
  });
}
