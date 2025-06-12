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
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isBalanceKey(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::reserve::BalanceKey`;
}

export interface BalanceKeyFields {
  dummyField: ToField<"bool">;
}

export type BalanceKeyReified = Reified<BalanceKey, BalanceKeyFields>;

/**
 * Move struct: `BalanceKey`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 */
export class BalanceKey implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::reserve::BalanceKey`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = BalanceKey.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::reserve::BalanceKey`;
  readonly $typeArgs: [];
  readonly $isPhantom = BalanceKey.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: BalanceKeyFields) {
    this.$fullTypeName = composeSuiType(
      BalanceKey.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::reserve::BalanceKey`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): BalanceKeyReified {
    return {
      typeName: BalanceKey.$typeName,
      fullTypeName: composeSuiType(
        BalanceKey.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::reserve::BalanceKey`,
      typeArgs: [] as [],
      isPhantom: BalanceKey.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => BalanceKey.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => BalanceKey.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => BalanceKey.fromBcs(data),
      bcs: BalanceKey.bcs,
      fromJSONField: (field: any) => BalanceKey.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => BalanceKey.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => BalanceKey.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => BalanceKey.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => BalanceKey.fetch(client, id),
      new: (fields: BalanceKeyFields) => {
        return new BalanceKey([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return BalanceKey.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<BalanceKey>> {
    return phantom(BalanceKey.reified());
  }
  static get p() {
    return BalanceKey.phantom();
  }

  static get bcs() {
    return bcs.struct("BalanceKey", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): BalanceKey {
    return BalanceKey.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): BalanceKey {
    if (!isBalanceKey(item.type)) {
      throw new Error("not a BalanceKey type");
    }

    return BalanceKey.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): BalanceKey {
    return BalanceKey.fromFields(BalanceKey.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): BalanceKey {
    return BalanceKey.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
  }

  static fromJSON(json: Record<string, any>): BalanceKey {
    if (json.$typeName !== BalanceKey.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return BalanceKey.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): BalanceKey {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isBalanceKey(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a BalanceKey object`);
    }
    return BalanceKey.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): BalanceKey {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isBalanceKey(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a BalanceKey object`);
      }

      return BalanceKey.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return BalanceKey.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<BalanceKey> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching BalanceKey object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isBalanceKey(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a BalanceKey object`);
    }

    return BalanceKey.fromSuiObjectData(res.data);
  }
}
