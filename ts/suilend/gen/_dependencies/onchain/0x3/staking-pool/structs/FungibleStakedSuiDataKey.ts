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
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isFungibleStakedSuiDataKey(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::staking_pool::FungibleStakedSuiDataKey`;
}

export interface FungibleStakedSuiDataKeyFields {
  dummyField: ToField<"bool">;
}

export type FungibleStakedSuiDataKeyReified = Reified<
  FungibleStakedSuiDataKey,
  FungibleStakedSuiDataKeyFields
>;

/**
 * Move struct: `FungibleStakedSuiDataKey`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::staking_pool`
 */
export class FungibleStakedSuiDataKey implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::staking_pool::FungibleStakedSuiDataKey`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = FungibleStakedSuiDataKey.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::staking_pool::FungibleStakedSuiDataKey`;
  readonly $typeArgs: [];
  readonly $isPhantom = FungibleStakedSuiDataKey.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: FungibleStakedSuiDataKeyFields) {
    this.$fullTypeName = composeSuiType(
      FungibleStakedSuiDataKey.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::staking_pool::FungibleStakedSuiDataKey`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): FungibleStakedSuiDataKeyReified {
    return {
      typeName: FungibleStakedSuiDataKey.$typeName,
      fullTypeName: composeSuiType(
        FungibleStakedSuiDataKey.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::staking_pool::FungibleStakedSuiDataKey`,
      typeArgs: [] as [],
      isPhantom: FungibleStakedSuiDataKey.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => FungibleStakedSuiDataKey.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        FungibleStakedSuiDataKey.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => FungibleStakedSuiDataKey.fromBcs(data),
      bcs: FungibleStakedSuiDataKey.bcs,
      fromJSONField: (field: any) => FungibleStakedSuiDataKey.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => FungibleStakedSuiDataKey.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        FungibleStakedSuiDataKey.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        FungibleStakedSuiDataKey.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => FungibleStakedSuiDataKey.fetch(client, id),
      new: (fields: FungibleStakedSuiDataKeyFields) => {
        return new FungibleStakedSuiDataKey([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return FungibleStakedSuiDataKey.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<FungibleStakedSuiDataKey>> {
    return phantom(FungibleStakedSuiDataKey.reified());
  }
  static get p() {
    return FungibleStakedSuiDataKey.phantom();
  }

  static get bcs() {
    return bcs.struct("FungibleStakedSuiDataKey", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): FungibleStakedSuiDataKey {
    return FungibleStakedSuiDataKey.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): FungibleStakedSuiDataKey {
    if (!isFungibleStakedSuiDataKey(item.type)) {
      throw new Error("not a FungibleStakedSuiDataKey type");
    }

    return FungibleStakedSuiDataKey.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): FungibleStakedSuiDataKey {
    return FungibleStakedSuiDataKey.fromFields(FungibleStakedSuiDataKey.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): FungibleStakedSuiDataKey {
    return FungibleStakedSuiDataKey.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): FungibleStakedSuiDataKey {
    if (json.$typeName !== FungibleStakedSuiDataKey.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return FungibleStakedSuiDataKey.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): FungibleStakedSuiDataKey {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isFungibleStakedSuiDataKey(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a FungibleStakedSuiDataKey object`,
      );
    }
    return FungibleStakedSuiDataKey.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): FungibleStakedSuiDataKey {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isFungibleStakedSuiDataKey(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a FungibleStakedSuiDataKey object`);
      }

      return FungibleStakedSuiDataKey.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return FungibleStakedSuiDataKey.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<FungibleStakedSuiDataKey> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching FungibleStakedSuiDataKey object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isFungibleStakedSuiDataKey(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a FungibleStakedSuiDataKey object`);
    }

    return FungibleStakedSuiDataKey.fromSuiObjectData(res.data);
  }
}
