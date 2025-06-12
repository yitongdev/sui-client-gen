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
} from "../../../_framework/reified.js";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../_framework/util.js";
import { PKG_V10 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isFeeReceiversKey(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V10}::lending_market::FeeReceiversKey`;
}

export interface FeeReceiversKeyFields {
  dummyField: ToField<"bool">;
}

export type FeeReceiversKeyReified = Reified<FeeReceiversKey, FeeReceiversKeyFields>;

/**
 * Move struct: `FeeReceiversKey`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 */
export class FeeReceiversKey implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V10}::lending_market::FeeReceiversKey`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = FeeReceiversKey.$typeName;
  readonly $fullTypeName: `${typeof PKG_V10}::lending_market::FeeReceiversKey`;
  readonly $typeArgs: [];
  readonly $isPhantom = FeeReceiversKey.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: FeeReceiversKeyFields) {
    this.$fullTypeName = composeSuiType(
      FeeReceiversKey.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V10}::lending_market::FeeReceiversKey`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): FeeReceiversKeyReified {
    return {
      typeName: FeeReceiversKey.$typeName,
      fullTypeName: composeSuiType(
        FeeReceiversKey.$typeName,
        ...[],
      ) as `${typeof PKG_V10}::lending_market::FeeReceiversKey`,
      typeArgs: [] as [],
      isPhantom: FeeReceiversKey.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => FeeReceiversKey.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => FeeReceiversKey.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => FeeReceiversKey.fromBcs(data),
      bcs: FeeReceiversKey.bcs,
      fromJSONField: (field: any) => FeeReceiversKey.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => FeeReceiversKey.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => FeeReceiversKey.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => FeeReceiversKey.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => FeeReceiversKey.fetch(client, id),
      new: (fields: FeeReceiversKeyFields) => {
        return new FeeReceiversKey([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return FeeReceiversKey.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<FeeReceiversKey>> {
    return phantom(FeeReceiversKey.reified());
  }
  static get p() {
    return FeeReceiversKey.phantom();
  }

  static get bcs() {
    return bcs.struct("FeeReceiversKey", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): FeeReceiversKey {
    return FeeReceiversKey.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): FeeReceiversKey {
    if (!isFeeReceiversKey(item.type)) {
      throw new Error("not a FeeReceiversKey type");
    }

    return FeeReceiversKey.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): FeeReceiversKey {
    return FeeReceiversKey.fromFields(FeeReceiversKey.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): FeeReceiversKey {
    return FeeReceiversKey.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): FeeReceiversKey {
    if (json.$typeName !== FeeReceiversKey.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return FeeReceiversKey.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): FeeReceiversKey {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isFeeReceiversKey(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a FeeReceiversKey object`);
    }
    return FeeReceiversKey.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): FeeReceiversKey {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isFeeReceiversKey(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a FeeReceiversKey object`);
      }

      return FeeReceiversKey.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return FeeReceiversKey.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<FeeReceiversKey> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching FeeReceiversKey object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isFeeReceiversKey(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a FeeReceiversKey object`);
    }

    return FeeReceiversKey.fromSuiObjectData(res.data);
  }
}
