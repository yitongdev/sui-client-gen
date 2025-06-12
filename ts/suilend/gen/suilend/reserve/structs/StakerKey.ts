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
import { PKG_V8 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isStakerKey(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V8}::reserve::StakerKey`;
}

export interface StakerKeyFields {
  dummyField: ToField<"bool">;
}

export type StakerKeyReified = Reified<StakerKey, StakerKeyFields>;

/**
 * Move struct: `StakerKey`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 */
export class StakerKey implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V8}::reserve::StakerKey`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = StakerKey.$typeName;
  readonly $fullTypeName: `${typeof PKG_V8}::reserve::StakerKey`;
  readonly $typeArgs: [];
  readonly $isPhantom = StakerKey.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: StakerKeyFields) {
    this.$fullTypeName = composeSuiType(
      StakerKey.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V8}::reserve::StakerKey`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): StakerKeyReified {
    return {
      typeName: StakerKey.$typeName,
      fullTypeName: composeSuiType(
        StakerKey.$typeName,
        ...[],
      ) as `${typeof PKG_V8}::reserve::StakerKey`,
      typeArgs: [] as [],
      isPhantom: StakerKey.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => StakerKey.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => StakerKey.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => StakerKey.fromBcs(data),
      bcs: StakerKey.bcs,
      fromJSONField: (field: any) => StakerKey.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => StakerKey.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => StakerKey.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => StakerKey.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => StakerKey.fetch(client, id),
      new: (fields: StakerKeyFields) => {
        return new StakerKey([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return StakerKey.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<StakerKey>> {
    return phantom(StakerKey.reified());
  }
  static get p() {
    return StakerKey.phantom();
  }

  static get bcs() {
    return bcs.struct("StakerKey", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): StakerKey {
    return StakerKey.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): StakerKey {
    if (!isStakerKey(item.type)) {
      throw new Error("not a StakerKey type");
    }

    return StakerKey.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): StakerKey {
    return StakerKey.fromFields(StakerKey.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): StakerKey {
    return StakerKey.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
  }

  static fromJSON(json: Record<string, any>): StakerKey {
    if (json.$typeName !== StakerKey.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return StakerKey.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): StakerKey {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isStakerKey(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a StakerKey object`);
    }
    return StakerKey.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): StakerKey {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isStakerKey(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a StakerKey object`);
      }

      return StakerKey.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return StakerKey.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<StakerKey> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching StakerKey object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isStakerKey(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a StakerKey object`);
    }

    return StakerKey.fromSuiObjectData(res.data);
  }
}
