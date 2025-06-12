import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { Bytes32 } from "../../../0x5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a/bytes32/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isUpgradeContract(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::contract_upgrade::UpgradeContract`;
}

export interface UpgradeContractFields {
  digest: ToField<Bytes32>;
}

export type UpgradeContractReified = Reified<UpgradeContract, UpgradeContractFields>;

/**
 * Move struct: `UpgradeContract`
 * Module: `8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::contract_upgrade`
 */
export class UpgradeContract implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::contract_upgrade::UpgradeContract`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = UpgradeContract.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::contract_upgrade::UpgradeContract`;
  readonly $typeArgs: [];
  readonly $isPhantom = UpgradeContract.$isPhantom;

  readonly digest: ToField<Bytes32>;

  private constructor(typeArgs: [], fields: UpgradeContractFields) {
    this.$fullTypeName = composeSuiType(
      UpgradeContract.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::contract_upgrade::UpgradeContract`;
    this.$typeArgs = typeArgs;

    this.digest = fields.digest;
  }

  static reified(): UpgradeContractReified {
    return {
      typeName: UpgradeContract.$typeName,
      fullTypeName: composeSuiType(
        UpgradeContract.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::contract_upgrade::UpgradeContract`,
      typeArgs: [] as [],
      isPhantom: UpgradeContract.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => UpgradeContract.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => UpgradeContract.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => UpgradeContract.fromBcs(data),
      bcs: UpgradeContract.bcs,
      fromJSONField: (field: any) => UpgradeContract.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => UpgradeContract.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => UpgradeContract.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => UpgradeContract.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => UpgradeContract.fetch(client, id),
      new: (fields: UpgradeContractFields) => {
        return new UpgradeContract([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return UpgradeContract.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<UpgradeContract>> {
    return phantom(UpgradeContract.reified());
  }
  static get p() {
    return UpgradeContract.phantom();
  }

  static get bcs() {
    return bcs.struct("UpgradeContract", {
      digest: Bytes32.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): UpgradeContract {
    return UpgradeContract.reified().new({
      digest: decodeFromFields(Bytes32.reified(), fields.digest),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): UpgradeContract {
    if (!isUpgradeContract(item.type)) {
      throw new Error("not a UpgradeContract type");
    }

    return UpgradeContract.reified().new({
      digest: decodeFromFieldsWithTypes(Bytes32.reified(), item.fields.digest),
    });
  }

  static fromBcs(data: Uint8Array): UpgradeContract {
    return UpgradeContract.fromFields(UpgradeContract.bcs.parse(data));
  }

  toJSONField() {
    return {
      digest: this.digest.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): UpgradeContract {
    return UpgradeContract.reified().new({
      digest: decodeFromJSONField(Bytes32.reified(), field.digest),
    });
  }

  static fromJSON(json: Record<string, any>): UpgradeContract {
    if (json.$typeName !== UpgradeContract.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return UpgradeContract.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): UpgradeContract {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isUpgradeContract(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a UpgradeContract object`);
    }
    return UpgradeContract.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): UpgradeContract {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isUpgradeContract(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a UpgradeContract object`);
      }

      return UpgradeContract.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return UpgradeContract.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<UpgradeContract> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching UpgradeContract object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isUpgradeContract(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a UpgradeContract object`);
    }

    return UpgradeContract.fromSuiObjectData(res.data);
  }
}
