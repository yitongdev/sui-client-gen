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
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isV__0_1_2(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::version_control::V__0_1_2`;
}

export interface V__0_1_2Fields {
  dummyField: ToField<"bool">;
}

export type V__0_1_2Reified = Reified<V__0_1_2, V__0_1_2Fields>;

/**
 * Move struct: `V__0_1_2`
 * Module: `8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::version_control`
 */
export class V__0_1_2 implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::version_control::V__0_1_2`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = V__0_1_2.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::version_control::V__0_1_2`;
  readonly $typeArgs: [];
  readonly $isPhantom = V__0_1_2.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: V__0_1_2Fields) {
    this.$fullTypeName = composeSuiType(
      V__0_1_2.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::version_control::V__0_1_2`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): V__0_1_2Reified {
    return {
      typeName: V__0_1_2.$typeName,
      fullTypeName: composeSuiType(
        V__0_1_2.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::version_control::V__0_1_2`,
      typeArgs: [] as [],
      isPhantom: V__0_1_2.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => V__0_1_2.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        V__0_1_2.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => V__0_1_2.fromBcs(data),
      bcs: V__0_1_2.bcs,
      fromJSONField: (field: any) => V__0_1_2.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => V__0_1_2.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        V__0_1_2.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        V__0_1_2.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        V__0_1_2.fetch(client, id),
      new: (fields: V__0_1_2Fields) => {
        return new V__0_1_2([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return V__0_1_2.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<V__0_1_2>> {
    return phantom(V__0_1_2.reified());
  }
  static get p() {
    return V__0_1_2.phantom();
  }

  static get bcs() {
    return bcs.struct("V__0_1_2", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): V__0_1_2 {
    return V__0_1_2.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): V__0_1_2 {
    if (!isV__0_1_2(item.type)) {
      throw new Error("not a V__0_1_2 type");
    }

    return V__0_1_2.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): V__0_1_2 {
    return V__0_1_2.fromFields(V__0_1_2.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): V__0_1_2 {
    return V__0_1_2.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): V__0_1_2 {
    if (json.$typeName !== V__0_1_2.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return V__0_1_2.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): V__0_1_2 {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isV__0_1_2(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a V__0_1_2 object`,
      );
    }
    return V__0_1_2.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): V__0_1_2 {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isV__0_1_2(data.bcs.type)) {
        throw new Error(`object at is not a V__0_1_2 object`);
      }

      return V__0_1_2.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return V__0_1_2.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<V__0_1_2> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching V__0_1_2 object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isV__0_1_2(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a V__0_1_2 object`);
    }

    return V__0_1_2.fromSuiObjectData(res.data);
  }
}
