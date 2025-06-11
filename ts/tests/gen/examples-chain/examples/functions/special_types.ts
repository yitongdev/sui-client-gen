import { pure, vector } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib-chain/ascii/structs/index.js";
import { Option } from "../../../move-stdlib-chain/option/structs/index.js";
import { String as String1 } from "../../../move-stdlib-chain/string/structs/index.js";
import { ID } from "../../../sui-chain/object/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import { ExampleStruct } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SpecialTypesArgs {
  string1: string | TransactionArgument;
  string2: string | TransactionArgument;
  vecU64: Array<bigint | TransactionArgument> | TransactionArgument;
  vecExampleStruct: Array<TransactionObjectInput> | TransactionArgument;
  id: string | TransactionArgument;
  address: string | TransactionArgument;
  option1: bigint | TransactionArgument | null;
  option2: bigint | TransactionArgument | null;
}

/**
 * Move function: `special_types`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::examples`
 *
 * @param tx - The transaction object
 * @param string1 - Function parameter
 * @param string2 - Function parameter
 * @param vecU64 - Function parameter
 * @param vecExampleStruct - Function parameter
 * @param id - Function parameter
 * @param address - Function parameter
 * @param option1 - Function parameter
 * @param option2 - Function parameter
 * @param txContext - Function parameter
 */
export function specialTypes(
  tx: Transaction,
  args: SpecialTypesArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::examples::special_types`,
    arguments: [
      pure(tx, args.string1, `${String.$typeName}`),
      pure(tx, args.string2, `${String1.$typeName}`),
      pure(tx, args.vecU64, `vector<u64>`),
      vector(tx, `${ExampleStruct.$typeName}`, args.vecExampleStruct),
      pure(tx, args.id, `${ID.$typeName}`),
      pure(tx, args.address, `address`),
      pure(tx, args.option1, `${Option.$typeName}<u64>`),
      pure(tx, args.option2, `${Option.$typeName}<u64>`),
    ],
  });
}
